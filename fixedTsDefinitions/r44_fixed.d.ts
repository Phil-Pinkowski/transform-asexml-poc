import * as Primitive from "./xml-primitives";

// Source files:
// https://www.nemmco.com.au/asexml/schemas/r44/Acknowledgements_r15.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/BAR_r31.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/BulkDataTool_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/CATSReports_r39.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/CATSTableReplication_r43.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ClientInformation_r42.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Common_r43.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/CustomerDetails_r41.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/CustomerTransfer_r29.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ElectricityEnumerations.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ElectricityHighSpeedMonitoring_r26.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ElectricityMMS_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ElectricityMasterStandingData_r44.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Electricity_r44.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Enumerations.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Events_r44.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Faults_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/GasEnumerations.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/GasMarketWholesale_r34.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Gas_r40.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Header_r37.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/HighSpeedMonitoring_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/HubManagement_r37.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/MDMTReports_r44.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/MarketWholesale_r20.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/MeterDataManagement_r36.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NMIDataAccess_r39.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NOSAssessment_r38.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NOSBooking_r38.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NOSCommon_r38.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NOSEquipment_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/NetworkBilling_r34.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/OneWayNotification_r43.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/P2P_r36.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Reports_r39.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/ServiceOrder_r41.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/TableReplication_r33.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/Transactions_r43.xsd
// https://www.nemmco.com.au/asexml/schemas/r44/aseXML_r44.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
/** Purpose - Accept/Reject indication */
export type AcceptReject = "A" | "R";
interface _AcceptReject extends Primitive._string {
  content: AcceptReject;
}

interface _AccessContract extends BaseType {
  Date?: Date;
  Name?: string;
}
export interface AccessContract extends _AccessContract {
  constructor: { new (): AccessContract };
}
export var AccessContract: { new (): AccessContract };

type AccessContractNameType = string;
type _AccessContractNameType = Primitive._string;

export type AccessDetail = string;
type _AccessDetail = Primitive._string;

/** Schema - MeterDataManagement */
interface _AccountCreationNotification extends BaseType {
  version?: r9;
  AccountCreationData: NMIStandingData;
}
export interface AccountCreationNotification
  extends _AccountCreationNotification {
  constructor: { new (): AccountCreationNotification };
}
export var AccountCreationNotification: { new (): AccountCreationNotification };

/** Purpose - The payload used to carry acknowledgments
 * Detail - The aseXML acknowledgement model calls for each message and transaction to be acknowledged, subject to certain rules. For further information, refer to the aseXMl guidelines. */
interface _Acknowledgements extends BaseType {
  MessageAcknowledgement?: MessageAcknowledgement[];
  TransactionAcknowledgement?: TransactionAcknowledgement[];
}
export interface Acknowledgements extends _Acknowledgements {
  constructor: { new (): Acknowledgements };
}
export var Acknowledgements: { new (): Acknowledgements };

/** Purpose - Defines a list of valid update statuses */
export type ActionType = "New" | "Update" | "Cancel" | "Replace";
interface _ActionType extends Primitive._string {
  content: ActionType;
}

/** Purpose - Active/Inactive indication */
export type ActiveInactive = "A" | "I";
interface _ActiveInactive extends Primitive._string {
  content: ActiveInactive;
}

/** Purpose - Define an address capable of representing both domestic and International addresses */
interface _Address extends BaseType {
  AustralianAddress: AustralianAddress;
  InternationalAddress: InternationalAddress;
}
export interface Address extends _Address {
  constructor: { new (): Address };
}
export var Address: { new (): Address };

/** Purpose - Define the adjustment action type. */
export type AdjustmentIndicator = "Cancelled" | "New" | "Rebilled";
interface _AdjustmentIndicator extends Primitive._string {
  content: AdjustmentIndicator;
}

export type AlertType = string;
type _AlertType = Primitive._string;

interface _AllocationNotification extends BaseType {
  version?: r31;
  AnticipatedWithdrawal: QuantityNotification;
  EstimatedConsumption: QuantityNotification;
  GatePointInflow: QuantityNotification;
  GatePointProfile: QuantityNotification;
  IntervalMeterProfile: QuantityNotification;
  PipelineNomination: QuantityNotification;
  PipelineProfile: QuantityNotification;
  PipelineRatio: QuantityNotification;
  ShipperChange: ShipperChangeRequestType;
  ShipperReportRequest: ShipperChangeRequestType;
  ShipperReportResponse: ShipperChangeRequestType;
  SubnetProfile: QuantityNotification;
  SubnetProfileForecast: QuantityNotification;
  UserAllocation: QuantityNotification;
  UserProfileForecast: QuantityNotification;
}
export interface AllocationNotification extends _AllocationNotification {
  constructor: { new (): AllocationNotification };
}
export var AllocationNotification: { new (): AllocationNotification };

interface _AllocationQuantityType extends _EnergyQuantity {
  type: AllocationType;
  usagePrecedence: number;
}
export interface AllocationQuantityType extends _AllocationQuantityType {
  constructor: { new (): AllocationQuantityType };
}
export var AllocationQuantityType: { new (): AllocationQuantityType };

export type AllocationType = "Percent" | "Quantity";
interface _AllocationType extends Primitive._string {
  content: AllocationType;
}

/** NEM - B2B Electricity;	Transaction Group: SITE	; Purpose: Provide Site Address Details and Site Access Details - National Electricity B2B Process - Tranche 1 Build Pack; 		Used for fully tagged transactions using derived types based on NMIStandingData;
 * VicGas
 * Participant Build Pack 3 - B2B System Interface Definitions v1.5 dated 26/08/2002
 * TransactionGroup - SITE
 * This complex type supports the following business transactions and are grouped as following:
 * Site Access Information
 * 66	Meter Site Access Information Change from RB
 * 67	Meter Site Access Information Change from DB
 * Site Address Information
 * 68	Supply Point Information
 * 69	Address Information Change from DB
 * Route Change
 * 75	Meter Reading Route Change */
interface _AmendMeterRouteDetails extends BaseType {
  version?: r19;
  AmendSiteAccessDetails: NMIStandingData;
  AmendSiteAddressDetails: SiteAddressDetails;
  CSVAmendScheduledReadingDay: CSVRequestFormat;
  CSVAmendSiteAddressDetails: CSVRequestFormat;
}
export interface AmendMeterRouteDetails extends _AmendMeterRouteDetails {
  constructor: { new (): AmendMeterRouteDetails };
}
export var AmendMeterRouteDetails: { new (): AmendMeterRouteDetails };

/** Purpose - Defines the currency data type as a string of numeric characters in format 15.2 with no units attached to it. */
export type Amount = number;
type _Amount = Primitive._number;

/** Schema - Gas */
export type AnticipatedAnnualConsumption = number;
type _AnticipatedAnnualConsumption = Primitive._number;

export type APIMethod = string;
type _APIMethod = Primitive._string;

export type APIName = string;
type _APIName = Primitive._string;

/** Purpose - Contain API reference details. */
interface _APIReference extends BaseType {
  Method?: string;
  Name?: string;
  Resource?: string;
}
export interface APIReference extends _APIReference {
  constructor: { new (): APIReference };
}
export var APIReference: { new (): APIReference };

export type APIResource = string;
type _APIResource = Primitive._string;

/** Schema - Appointments */
interface _AppointmentDateTime extends BaseType {
  Date: Date;
  Time?: string;
}
export interface AppointmentDateTime extends _AppointmentDateTime {
  constructor: { new (): AppointmentDateTime };
}
export var AppointmentDateTime: { new (): AppointmentDateTime };

/** Schema - Appointments */
interface _AppointmentDetail extends BaseType {
  CustomerAgreedEndDate?: Date;
  CustomerAgreedStartDate?: Date;
  CustomerNotificationMethod?: CustomerNotificationMethod;
  Preferred?: AppointmentDateTime;
  Reference?: string;
  ScheduledDate?: Date;
}
export interface AppointmentDetail extends _AppointmentDetail {
  constructor: { new (): AppointmentDetail };
}
export var AppointmentDetail: { new (): AppointmentDetail };

/** The Percentage of Net Section Load attributable to consumption by a User's customers. */
export type ApportionmentPercentage = number;
type _ApportionmentPercentage = Primitive._number;

/** Purpose - Define the structure of Work details. */
interface _AttachmentList extends BaseType {
  Attachment?: P2PAttachment[];
}
export interface AttachmentList extends _AttachmentList {
  constructor: { new (): AttachmentList };
}
export var AttachmentList: { new (): AttachmentList };

export type AttachmentName = string;
type _AttachmentName = Primitive._string;

export type AttachmentType = string;
type _AttachmentType = Primitive._string;

/** Purpose - Define an Australian address
 * Detail - The Australian address format allows for either a structured or an unstructured physical address, with locality, state and postcode always being carried as structured elements. In addition, it supports postal address formats. It follows the definitions and rules set out in AS4590 for address exchange.
 *
 * It is important to note the occurrence frequency of elements within the format, particularly BuildingOrPropertyName, House and Street. */
interface _AustralianAddress extends BaseType {
  DeliveryPointIdentifier?: number;
  GNAFPID?: string;
  PostCode: string;
  StateOrTerritory: AustralianStateOrTerritory;
  StructuredAddress: AustralianStructuredAddressComponents;
  SuburbOrPlaceOrLocality?: string;
  UnstructuredAddress: AustralianAddressUnstructuredAddressType;
}
export interface AustralianAddress extends _AustralianAddress {
  constructor: { new (): AustralianAddress };
}
export var AustralianAddress: { new (): AustralianAddress };

/** Purpose - Define a line of unstructured Australian address information
 * Detail - An unstructured format allows for legacy or non-specific address/location information to be carried along with structured addresses within a common address container. */
export type AustralianAddressLine = string;
type _AustralianAddressLine = Primitive._string;

/** Purpose - Define the structure to allow provision of search parameters for an address.
 * Detail - This definition is essentially the same as the structured part of Australian address except that either postcode or locality or both may be provided. This allows some flexibility in searching whilst constraining the subset of records to be considered. */
interface _AustralianAddressSearch extends BaseType {
  PostCode?: string;
  StateOrTerritory?: AustralianStateOrTerritory;
  StructuredAddress: AustralianStructuredAddressComponents;
  SuburbOrPlaceOrLocality?: string;
}
export interface AustralianAddressSearch extends _AustralianAddressSearch {
  constructor: { new (): AustralianAddressSearch };
}
export var AustralianAddressSearch: { new (): AustralianAddressSearch };

interface _AustralianAddressUnstructuredAddressType extends BaseType {
  AddressLine: string[];
}
interface AustralianAddressUnstructuredAddressType
  extends _AustralianAddressUnstructuredAddressType {
  constructor: { new (): AustralianAddressUnstructuredAddressType };
}

/** Purpose - Define building or property name as per Australian Standard AS4590 */
export type AustralianBuildingOrPropertyName = string;
type _AustralianBuildingOrPropertyName = Primitive._string;

/** Purpose - Define Australian delivery point identifier as per Australian Standard AS4590/Australia Post AMAS standard */
export type AustralianDeliveryPointIdentifier = number;
type _AustralianDeliveryPointIdentifier = Primitive._number;

/** Purpose - Define flat or unit number as per Australian Standard AS4590
 * Detail - Note that alphabetic characters are permitted allowing for "100A"  etc. */
export type AustralianFlatOrUnitNumber = string;
type _AustralianFlatOrUnitNumber = Primitive._string;

/** Purpose - Define flat or unit types as per Australian Standard AS4590:2006
 *
 * Version 4.0 additions
 * -- FLAT - FLAT
 * -- ANT  - ANTENNA
 * -- ATM  - AUTOMATED TELLER MACHINE
 * -- BBQ  - BARBEQUE
 * -- BLCK - BLOCK
 * -- BTSD - BOATSHED
 * -- BLDG - BUILDING
 * -- BNGW - BUNGALOW
 * -- CAGE - CAGE
 * -- CARP - CARPARK
 * -- CARS - CARSPACE
 * -- CLUB - CLUB
 * -- COOL - COOLROOM
 * -- DUPL - DUPLEX
 * -- FCTY - FACTORY
 * -- GRGE - GARAGE
 * -- HALL - HALL
 * -- LBBY - LOBBY
 * -- LOFT - LOFT
 * -- LOT  - LOT
 * -- LSE  - LEASE
 * -- MBTH - MARINE BERTH
 * -- OFFC - OFFICE
 * -- REAR - REAR
 * -- ROOM - ROOM
 * -- RESV - RESERVE
 * -- SEC  - SECTION
 * -- SHRM - SHOWROOM
 * -- SIGN - SIGN
 * -- STLL - STALL
 * -- STOR - STORE
 * -- STR  - STRATA UNIT
 * -- SUBS - SUBSTATION
 * -- TNCY - TENANCY
 * -- TWR  - TOWER
 * -- UNIT - UNIT
 * -- VLT  - VAULT
 * -- WHSE - WAREHOUSE
 * -- WKSH - WORKSHOP
 * Version 5.0 additions
 * Element AustralianFlatOrUnitType has been restricted to 4 characters
 *
 * Version 6.0 deletions because of duplicate  Australian flat or unit types
 * -- DUPL - DUPLEX
 * -- FCTY - FACTORY
 * -- FLAT - FLAT
 * -- MBTH - MARINE BERTH
 * -- OFFC - OFFICE
 * -- ROOM - ROOM
 * -- STLL - STALL
 * -- UNIT - UNIT
 * -- WHSE - WAREHOUSE */
export type AustralianFlatOrUnitType =
  | "ANT"
  | "APT"
  | "ATM"
  | "BBQ"
  | "BLCK"
  | "BTSD"
  | "BLDG"
  | "BNGW"
  | "CAGE"
  | "CARP"
  | "CARS"
  | "CLUB"
  | "COOL"
  | "CTGE"
  | "DUP"
  | "F"
  | "FY"
  | "GRGE"
  | "HALL"
  | "HSE"
  | "KSK"
  | "LBBY"
  | "LOFT"
  | "LOT"
  | "LSE"
  | "MSNT"
  | "MB"
  | "OFF"
  | "PTHS"
  | "REAR"
  | "RESV"
  | "RM"
  | "SE"
  | "SEC"
  | "SHED"
  | "SHOP"
  | "SHRM"
  | "SIGN"
  | "SITE"
  | "SL"
  | "STOR"
  | "STR"
  | "STU"
  | "SUBS"
  | "TNCY"
  | "TNHS"
  | "TWR"
  | "U"
  | "VLLA"
  | "VLT"
  | "WARD"
  | "WE"
  | "WKSH";
interface _AustralianFlatOrUnitType extends Primitive._string {
  content: AustralianFlatOrUnitType;
}

/** Purpose - Define floor or level number as per Australian Standard AS4590
 * Detail - Note that alphabetic characters are permitted. */
export type AustralianFloorOrLevelNumber = string;
type _AustralianFloorOrLevelNumber = Primitive._string;

/** Purpose - Define floor or level types as per Australian Standard AS4590:2006
 *
 * Version 4.0 additions
 * -- LB	- LOBBY
 * -- OD	- OBSERVATION DECK
 * -- P	- PARKING
 * -- RT	- ROOFTOP
 * -- SB	- SUB-BASEMENT
 * Version 5.0 additions
 * -- Element AustralianFloorOrLevelType has been restricted to 2 characters */
export type AustralianFloorOrLevelType =
  | "B"
  | "FL"
  | "G"
  | "L"
  | "LB"
  | "LG"
  | "M"
  | "OD"
  | "P"
  | "UG"
  | "RT"
  | "SB";
interface _AustralianFloorOrLevelType extends Primitive._string {
  content: AustralianFloorOrLevelType;
}

/** Purpose - Define house number as per Australian Standard AS4590
 * Detail - Note that any alphabetic information should be included in the house number suffix */
export type AustralianHouseNumber = number;
type _AustralianHouseNumber = Primitive._number;

/** Purpose - Define house number suffix as per Australian Standard AS4590
 * Detail - Any non-numeric information should be entered here */
export type AustralianHouseNumberSuffix = string;
type _AustralianHouseNumberSuffix = Primitive._string;

/** Purpose - Define location descriptor as per Australian Standard AS4590
 * Detail - This is a "catch all" field for non-standard address information. */
export type AustralianLocationDescriptor = string;
type _AustralianLocationDescriptor = Primitive._string;

/** Purpose - Define lot number as per Australian Standard AS4590 */
export type AustralianLotNumber = string;
type _AustralianLotNumber = Primitive._string;

/** Purpose - Define an Australian address
 * Detail - This type allows the transfer of portions of an Australian address. where a complete address is to be transferred, the AustralianAddress type should be used. */
interface _AustralianPartialAddress extends BaseType {
  DeliveryPointIdentifier?: number;
  GNAFPID?: string;
  PostCode?: string;
  StateOrTerritory?: AustralianStateOrTerritory;
  StructuredAddress?: AustralianStructuredAddressPartialComponents;
  SuburbOrPlaceOrLocality?: string;
  UnstructuredAddress?: AustralianPartialAddressUnstructuredAddressType;
}
export interface AustralianPartialAddress extends _AustralianPartialAddress {
  constructor: { new (): AustralianPartialAddress };
}
export var AustralianPartialAddress: { new (): AustralianPartialAddress };

interface _AustralianPartialAddressUnstructuredAddressType extends BaseType {
  AddressLine: string[];
}
interface AustralianPartialAddressUnstructuredAddressType
  extends _AustralianPartialAddressUnstructuredAddressType {
  constructor: { new (): AustralianPartialAddressUnstructuredAddressType };
}

/** Purpose - Define an Australian telephone service number
 * Detail - This format follows AS4590. */
interface _AustralianPhoneNumber extends BaseType {
  serviceType: AustralianTelephoneServiceType;
  Number: string;
  Prefix: string;
  ServiceComment?: string;
}
export interface AustralianPhoneNumber extends _AustralianPhoneNumber {
  constructor: { new (): AustralianPhoneNumber };
}
export var AustralianPhoneNumber: { new (): AustralianPhoneNumber };

/** Purpose - Define postal delivery number prefix as per Australian Standard AS4590 */
export type AustralianPostalDeliveryNumberPrefix = string;
type _AustralianPostalDeliveryNumberPrefix = Primitive._string;

/** Purpose - Define postal delivery number suffix as per Australian Standard AS4590 */
export type AustralianPostalDeliveryNumberSuffix = string;
type _AustralianPostalDeliveryNumberSuffix = Primitive._string;

/** Purpose - Define postal delivery number value as per Australian Standard AS4590 */
export type AustralianPostalDeliveryNumberValue = number;
type _AustralianPostalDeliveryNumberValue = Primitive._number;

/** Purpose - Define postal delivery types as per Australian Standard AS4590:2006
 * Detail - There are several additions in this list over and above what is in AS4590:2006. The extra types have been derived from the Australia Post AMAS standard.
 * -- Version 5.0 additions
 * -- Element AustralianPostalDeliveryType has been restricted to 11 characters */
export type AustralianPostalDeliveryType =
  | "CARE PO"
  | "CMA"
  | "CMB"
  | "CPA"
  | "GPO BOX"
  | "LOCKED BAG"
  | "MS"
  | "PO BOX"
  | "PRIVATE BAG"
  | "RSD"
  | "RMB"
  | "RMS";
interface _AustralianPostalDeliveryType extends Primitive._string {
  content: AustralianPostalDeliveryType;
}

/** Purpose - Define Australian postcode as per Australian Standard AS4590 */
export type AustralianPostCode = string;
type _AustralianPostCode = Primitive._string;

/** Purpose - Define Australian states and territories as per Australian Standard AS4590 */
export type AustralianStateOrTerritory =
  | "AAT"
  | "ACT"
  | "NSW"
  | "NT"
  | "QLD"
  | "SA"
  | "TAS"
  | "VIC"
  | "WA";
interface _AustralianStateOrTerritory extends Primitive._string {
  content: AustralianStateOrTerritory;
}

/** Purpose - Define street name as per Australian Standard AS4590 */
export type AustralianStreetName = string;
type _AustralianStreetName = Primitive._string;

/** Purpose - Define street suffixes as per Australian Standard AS4590:2006
 *
 * Version 4.0 additions
 * -- DE	- DEVIATION
 * -- ML	- MALL
 * -- IN	- INNER
 * -- OF	- OFF
 * -- ON	- ON
 * -- OP	- OVERPASS
 * -- OT	- OUTER
 * -- Version 5.0 additions
 * -- Element AustralianStreetSuffix has been restricted to 2 characters */
export type AustralianStreetSuffix =
  | "CN"
  | "DE"
  | "E"
  | "EX"
  | "IN"
  | "LR"
  | "ML"
  | "N"
  | "NE"
  | "NW"
  | "OF"
  | "ON"
  | "OP"
  | "OT"
  | "S"
  | "SE"
  | "SW"
  | "UP"
  | "W";
interface _AustralianStreetSuffix extends Primitive._string {
  content: AustralianStreetSuffix;
}

/** Purpose - Define street types as per Australian Standard AS4590:2006.
 *
 * Detail - There are several additions in this list over and above those defined in AS4590:2006.  These additions are defined as follows:
 *
 * -- GTWY - GATEWAY
 * -- HETH - HEATH
 * -- ISLD - ISLAND
 * -- RTRN - RETURN
 * -- WOOD - WOOD
 *
 * Version 2.0 addition
 * -- VLL	- VILLA
 *
 * Version 3.0 addition
 * -- BAY  - BAY
 *
 * Version 4.0 additions
 * -- ACRE	- ACRE
 * -- ARTL	- ARTERIAL
 * -- ARTY	- ARTERY
 * -- AV	- AVENUE
 * -- BA	- BANAN
 * -- BANK	- BANK
 * -- BR	- BRACE
 * -- BRAN	- BRANCH
 * -- BRET	- BRETT
 * -- BVDE	- BOULEVARDE
 * -- BWK	- BOARDWALK
 * -- BWLK	- BOARDWALK
 * -- CLR	- CLUSTER
 * -- CNCD	- CONCORD
 * -- CNN	- CONNECTION
 * -- CNTN	- CONNECTION
 * -- CR	- CRESCENT
 * -- CRF	- CRIEF
 * -- CRK	- CROOK
 * -- CSAC	- CUL-DE-SAC
 * -- CSWY	- CAUSEWAY
 * -- CUT	- CUT
 * -- CUTT	- CUTTING
 * -- DASH	- DASH
 * -- DE	- DEVIATION
 * -- DENE	- DENE
 * -- DIV	- DIVIDE
 * -- DOCK	- DOCK
 * -- DOM	- DOMAIN
 * -- DOWN	- DOWN
 * -- DVWY	- DRIVEWAY
 * -- DWNS	- DOWNS
 * -- ESMT	- EASEMENT
 * -- FBRK	- FIREBREAK
 * -- FK	- FORK
 * -- FLNE	- FIRELINE
 * -- FLTS	- FLATS
 * -- FORD	- FORD
 * -- FORK	- FORK
 * -- GLDE	- GLADE
 * -- GWY	- GATEWAY
 * -- HIRD	- HIGHROAD
 * -- HLLW	- HOLLOW
 * -- HRBR	- HARBOUR
 * -- HTH	- HEATH
 * -- HVN	- HAVEN
 * -- ID	- ISLAND
 * -- INLT	- INLET
 * -- KEYS	- KEYS
 * -- KNOL	- KNOLL
 * -- LADR	- LADDER
 * -- LEAD	- LEAD
 * -- LEDR	- LEADER
 * -- LYNN	- LYNNE
 * -- MANR	- MANOR
 * -- MART	- MART
 * -- MEAD	- MEAD
 * -- MILE	- MILE
 * -- MNR	- MANOR
 * -- MTWY	- MOTORWAY
 * -- NTH	- NORTH
 * -- NULL	- NULL
 * -- OTLT	- OUTLET
 * -- OVAL	- OVAL
 * -- PLMS	- PALMS
 * -- PRDS	- PARADISE
 * -- PREC	- PRECINCT
 * -- PSLA	- PENINSULA
 * -- PWAY	- PATHWAY
 * -- PWY	- PARKWAY
 * -- REEF	- REEF
 * -- ROFW	- RIGHT OF WAY
 * -- ROWE	- ROWE
 * -- RSNG	- RISING
 * -- RTN	- RETURN
 * -- SHUN	- SHUNT
 * -- SKLN	- SKYLINE
 * -- STAI	- STRAIT
 * -- STH	- SOUTH
 * -- STRT	- STRAIGHT
 * -- SVWY	- SERVICEWAY
 * -- THFR	- THOROUGHFARE
 * -- THRU	- THROUGHWAY
 * -- TMWY	- TRAMWAY
 * -- TUNL	- TUNNEL
 * -- TVSE	- TRAVERSE
 * -- TWAY	- TRAMWAY
 * -- VIAD	- VIADUCT
 * -- VLGE	- VILLAGE
 * -- VLLA	- VILLA
 * -- VLLY	- VALLEY
 * -- VUE	- VUE
 * -- VWS	- VIEWS
 * -- WD	- WOOD
 * -- WDS	- WOODS
 * -- WTWY	- WATERWAY
 * -- WWAY	- WATERWAY
 * Version 5.0 additions
 * -- Element AustralianStreetType has been restricted to 4 characters
 *
 * Version 6.0 deletions because of duplicate  Australian street types
 * -- ARTY- ARTERY
 * -- AV - AVENUE
 * -- BWK - BOARDWALK
 * -- BR - BRACE
 * -- CSWY - CAUSEWAY
 * -- CNTN - CONNECTION
 * -- CR- CRESCENT
 * -- CSAC-CUL-DE-SAC
 * -- CUTT - CUTTING
 * -- DE - DEVIATION
 * -- DVWY - DRIVEWAY
 * -- FORK - FORK
 * -- GLDE - GLADE
 * -- GWY - GATEWAY
 * -- HTH - HEATH
 * -- HIRD - HIGHROAD
 * -- ID - ISLAND
 * -- MNR - MANOR
 * -- MTWY - MOTORWAY
 * -- PWY - PARKWAY
 * -- PWAY - PATHWAY
 * -- ROFW - RIGHT OF WAY
 * -- RTN - RETURN
 * -- SVWY - SERVICEWAY
 * -- THFR - THOROUGHFARE
 * -- TWAY - TRAMWAY
 * -- VIAD - VIADUCT
 * -- VLLA - VILLA
 * -- WWAY - WATERWAY
 * -- WD - WOOD */
export type AustralianStreetType =
  | "ACCS"
  | "ALLY"
  | "ALWY"
  | "AMBL"
  | "ANCG"
  | "APP"
  | "ARC"
  | "ART"
  | "AVE"
  | "BASN"
  | "BAY"
  | "BCH"
  | "BEND"
  | "BLK"
  | "BVD"
  | "BOWL"
  | "BRCE"
  | "BRAE"
  | "BRK"
  | "BDGE"
  | "BDWY"
  | "BROW"
  | "BYPA"
  | "BYWY"
  | "CAUS"
  | "CRSE"
  | "CTR"
  | "CNWY"
  | "CH"
  | "CIR"
  | "CLT"
  | "CCT"
  | "CRCS"
  | "CL"
  | "CLDE"
  | "CMMN"
  | "CON"
  | "CPS"
  | "CNR"
  | "CSO"
  | "CT"
  | "CTYD"
  | "COVE"
  | "CRES"
  | "CRST"
  | "CRSS"
  | "CRSG"
  | "CRD"
  | "COWY"
  | "CUWY"
  | "CDS"
  | "CTTG"
  | "DALE"
  | "DELL"
  | "DEVN"
  | "DIP"
  | "DSTR"
  | "DR"
  | "DRWY"
  | "EDGE"
  | "ELB"
  | "END"
  | "ENT"
  | "ESP"
  | "EST"
  | "EXP"
  | "EXTN"
  | "FAWY"
  | "FTRK"
  | "FITR"
  | "FLAT"
  | "FOLW"
  | "FTWY"
  | "FSHR"
  | "FORM"
  | "FWY"
  | "FRNT"
  | "FRTG"
  | "GAP"
  | "GDN"
  | "GDNS"
  | "GTE"
  | "GTES"
  | "GTWY"
  | "GLD"
  | "GLEN"
  | "GRA"
  | "GRN"
  | "GRND"
  | "GR"
  | "GLY"
  | "HETH"
  | "HTS"
  | "HRD"
  | "HUB"
  | "HWY"
  | "HILL"
  | "INTG"
  | "INTN"
  | "ISLD"
  | "JNC"
  | "KEY"
  | "LDG"
  | "LANE"
  | "LNWY"
  | "LEES"
  | "LINE"
  | "LINK"
  | "LT"
  | "LKT"
  | "LOOP"
  | "LWR"
  | "MALL"
  | "MNDR"
  | "MEW"
  | "MEWS"
  | "MWY"
  | "MT"
  | "NOOK"
  | "OTLK"
  | "PDE"
  | "PARK"
  | "PKLD"
  | "PKWY"
  | "PART"
  | "PASS"
  | "PATH"
  | "PHWY"
  | "PIAZ"
  | "PL"
  | "PLAT"
  | "PLZA"
  | "PKT"
  | "PNT"
  | "PORT"
  | "PROM"
  | "PRST"
  | "PSGE"
  | "QUAD"
  | "QDGL"
  | "QDRT"
  | "QY"
  | "QYS"
  | "RMBL"
  | "RAMP"
  | "RNGE"
  | "RCH"
  | "RES"
  | "REST"
  | "RTT"
  | "RIDE"
  | "RDGE"
  | "RGWY"
  | "ROWY"
  | "RING"
  | "RISE"
  | "RVR"
  | "RVWY"
  | "RVRA"
  | "RD"
  | "RDS"
  | "RDSD"
  | "RDWY"
  | "RNDE"
  | "RSBL"
  | "RTY"
  | "RND"
  | "RTE"
  | "RTRN"
  | "ROW"
  | "RUE"
  | "RUN"
  | "SWY"
  | "SDNG"
  | "SLPE"
  | "SND"
  | "SPUR"
  | "SQ"
  | "STRS"
  | "SHWY"
  | "STPS"
  | "STRA"
  | "ST"
  | "STRP"
  | "SBWY"
  | "TARN"
  | "TCE"
  | "THOR"
  | "TLWY"
  | "TOP"
  | "TOR"
  | "TWRS"
  | "TRK"
  | "TRL"
  | "TRLR"
  | "TRI"
  | "TKWY"
  | "TURN"
  | "UPAS"
  | "UPR"
  | "VALE"
  | "VDCT"
  | "VIEW"
  | "VLL"
  | "VLLS"
  | "VSTA"
  | "WADE"
  | "WALK"
  | "WKWY"
  | "WAY"
  | "WHRF"
  | "WOOD"
  | "WTRS"
  | "WYND"
  | "YARD"
  | "ACRE"
  | "ARTL"
  | "BA"
  | "BANK"
  | "BRAN"
  | "BRET"
  | "BVDE"
  | "BWLK"
  | "CLR"
  | "CNCD"
  | "CNN"
  | "CRF"
  | "CRK"
  | "CUT"
  | "DASH"
  | "DENE"
  | "DIV"
  | "DOCK"
  | "DOM"
  | "DOWN"
  | "DWNS"
  | "ESMT"
  | "FBRK"
  | "FK"
  | "FLNE"
  | "FLTS"
  | "FORD"
  | "HLLW"
  | "HRBR"
  | "HVN"
  | "INLT"
  | "KEYS"
  | "KNOL"
  | "LADR"
  | "LEAD"
  | "LEDR"
  | "LYNN"
  | "MANR"
  | "MART"
  | "MEAD"
  | "MILE"
  | "NTH"
  | "NULL"
  | "OTLT"
  | "OVAL"
  | "PLMS"
  | "PRDS"
  | "PREC"
  | "PSLA"
  | "REEF"
  | "ROWE"
  | "RSNG"
  | "SHUN"
  | "SKLN"
  | "STAI"
  | "STH"
  | "STRT"
  | "THRU"
  | "TMWY"
  | "TUNL"
  | "TVSE"
  | "VLGE"
  | "VLLY"
  | "VUE"
  | "VWS"
  | "WDS"
  | "WTWY";
interface _AustralianStreetType extends Primitive._string {
  content: AustralianStreetType;
}

/** Purpose - Define those fields of an Australian address that are only provided as part of a structured address
 * Detail - See the definition of AustralianAddress for more details. This type should be used where a complete address is being provided. If only part of an address is being provided, use the AustralianStructuredAddressPartialComponents type. */
interface _AustralianStructuredAddressComponents extends BaseType {
  BuildingOrPropertyName?: string[];
  FlatOrUnit?: AustralianStructuredAddressComponentsFlatOrUnitType;
  FloorOrLevel?: AustralianStructuredAddressComponentsFloorOrLevelType;
  House?: AustralianStructuredAddressComponentsHouseType[];
  LocationDescriptor?: string;
  Lot?: AustralianStructuredAddressComponentsLotType;
  PostalDelivery?: AustralianStructuredAddressComponentsPostalDeliveryType;
  Street?: AustralianStructuredAddressComponentsStreetType[];
}
export interface AustralianStructuredAddressComponents
  extends _AustralianStructuredAddressComponents {
  constructor: { new (): AustralianStructuredAddressComponents };
}
export var AustralianStructuredAddressComponents: {
  new (): AustralianStructuredAddressComponents;
};

interface _AustralianStructuredAddressComponentsFlatOrUnitType
  extends BaseType {
  FlatOrUnitNumber: string;
  FlatOrUnitType: AustralianFlatOrUnitType;
}
interface AustralianStructuredAddressComponentsFlatOrUnitType
  extends _AustralianStructuredAddressComponentsFlatOrUnitType {
  constructor: { new (): AustralianStructuredAddressComponentsFlatOrUnitType };
}

interface _AustralianStructuredAddressComponentsFloorOrLevelType
  extends BaseType {
  FloorOrLevelNumber?: string;
  FloorOrLevelType: AustralianFloorOrLevelType;
}
interface AustralianStructuredAddressComponentsFloorOrLevelType
  extends _AustralianStructuredAddressComponentsFloorOrLevelType {
  constructor: {
    new (): AustralianStructuredAddressComponentsFloorOrLevelType;
  };
}

interface _AustralianStructuredAddressComponentsHouseType extends BaseType {
  HouseNumber: number;
  HouseNumberSuffix?: string;
  HouseNumberTo?: number;
  HouseNumberToSuffix?: string;
}
interface AustralianStructuredAddressComponentsHouseType
  extends _AustralianStructuredAddressComponentsHouseType {
  constructor: { new (): AustralianStructuredAddressComponentsHouseType };
}

interface _AustralianStructuredAddressComponentsLotType extends BaseType {
  DPNumber?: string;
  LotNumber: string;
  SectionNumber?: string;
}
interface AustralianStructuredAddressComponentsLotType
  extends _AustralianStructuredAddressComponentsLotType {
  constructor: { new (): AustralianStructuredAddressComponentsLotType };
}

interface _AustralianStructuredAddressComponentsPostalDeliveryType
  extends BaseType {
  PostalDeliveryNumber?: AustralianStructuredAddressComponentsPostalDeliveryTypePostalDeliveryNumberType;
  PostalDeliveryType: AustralianPostalDeliveryType;
}
interface AustralianStructuredAddressComponentsPostalDeliveryType
  extends _AustralianStructuredAddressComponentsPostalDeliveryType {
  constructor: {
    new (): AustralianStructuredAddressComponentsPostalDeliveryType;
  };
}

interface _AustralianStructuredAddressComponentsPostalDeliveryTypePostalDeliveryNumberType
  extends BaseType {
  PostalDeliveryNumberPrefix?: string;
  PostalDeliveryNumberSuffix?: string;
  PostalDeliveryNumberValue?: number;
}
interface AustralianStructuredAddressComponentsPostalDeliveryTypePostalDeliveryNumberType
  extends _AustralianStructuredAddressComponentsPostalDeliveryTypePostalDeliveryNumberType {
  constructor: {
    new (): AustralianStructuredAddressComponentsPostalDeliveryTypePostalDeliveryNumberType;
  };
}

interface _AustralianStructuredAddressComponentsStreetType extends BaseType {
  StreetName: string;
  StreetSuffix?: AustralianStreetSuffix;
  StreetType?: AustralianStreetType;
}
interface AustralianStructuredAddressComponentsStreetType
  extends _AustralianStructuredAddressComponentsStreetType {
  constructor: { new (): AustralianStructuredAddressComponentsStreetType };
}

/** Purpose - Define those fields of an Australian address that are only provided as part of a structured address
 * Detail - See the definition of AustralianAddress for more details. Note that all the fields are optional in this type to allow for only portions of an address to be provided. The AustralianStructuredAddressComponents type restricts the content of this type for the case where a complete address is being exchanged. */
interface _AustralianStructuredAddressPartialComponents extends BaseType {
  BuildingOrPropertyName?: string[];
  FlatOrUnit?: AustralianStructuredAddressPartialComponentsFlatOrUnitType;
  FloorOrLevel?: AustralianStructuredAddressPartialComponentsFloorOrLevelType;
  House?: AustralianStructuredAddressPartialComponentsHouseType[];
  LocationDescriptor?: string;
  Lot?: AustralianStructuredAddressPartialComponentsLotType;
  PostalDelivery?: AustralianStructuredAddressPartialComponentsPostalDeliveryType;
  Street?: AustralianStructuredAddressPartialComponentsStreetType[];
}
export interface AustralianStructuredAddressPartialComponents
  extends _AustralianStructuredAddressPartialComponents {
  constructor: { new (): AustralianStructuredAddressPartialComponents };
}
export var AustralianStructuredAddressPartialComponents: {
  new (): AustralianStructuredAddressPartialComponents;
};

interface _AustralianStructuredAddressPartialComponentsFlatOrUnitType
  extends BaseType {
  FlatOrUnitNumber?: string;
  FlatOrUnitType?: AustralianFlatOrUnitType;
}
interface AustralianStructuredAddressPartialComponentsFlatOrUnitType
  extends _AustralianStructuredAddressPartialComponentsFlatOrUnitType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsFlatOrUnitType;
  };
}

interface _AustralianStructuredAddressPartialComponentsFloorOrLevelType
  extends BaseType {
  FloorOrLevelNumber?: string;
  FloorOrLevelType?: AustralianFloorOrLevelType;
}
interface AustralianStructuredAddressPartialComponentsFloorOrLevelType
  extends _AustralianStructuredAddressPartialComponentsFloorOrLevelType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsFloorOrLevelType;
  };
}

interface _AustralianStructuredAddressPartialComponentsHouseType
  extends BaseType {
  HouseNumber?: number;
  HouseNumberSuffix?: string;
  HouseNumberTo?: number;
  HouseNumberToSuffix?: string;
}
interface AustralianStructuredAddressPartialComponentsHouseType
  extends _AustralianStructuredAddressPartialComponentsHouseType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsHouseType;
  };
}

interface _AustralianStructuredAddressPartialComponentsLotType
  extends BaseType {
  DPNumber?: string;
  LotNumber?: string;
  SectionNumber?: string;
}
interface AustralianStructuredAddressPartialComponentsLotType
  extends _AustralianStructuredAddressPartialComponentsLotType {
  constructor: { new (): AustralianStructuredAddressPartialComponentsLotType };
}

interface _AustralianStructuredAddressPartialComponentsPostalDeliveryType
  extends BaseType {
  PostalDeliveryNumber?: AustralianStructuredAddressPartialComponentsPostalDeliveryTypePostalDeliveryNumberType;
  PostalDeliveryType?: AustralianPostalDeliveryType;
}
interface AustralianStructuredAddressPartialComponentsPostalDeliveryType
  extends _AustralianStructuredAddressPartialComponentsPostalDeliveryType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsPostalDeliveryType;
  };
}

interface _AustralianStructuredAddressPartialComponentsPostalDeliveryTypePostalDeliveryNumberType
  extends BaseType {
  PostalDeliveryNumberPrefix?: string;
  PostalDeliveryNumberSuffix?: string;
  PostalDeliveryNumberValue?: number;
}
interface AustralianStructuredAddressPartialComponentsPostalDeliveryTypePostalDeliveryNumberType
  extends _AustralianStructuredAddressPartialComponentsPostalDeliveryTypePostalDeliveryNumberType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsPostalDeliveryTypePostalDeliveryNumberType;
  };
}

interface _AustralianStructuredAddressPartialComponentsStreetType
  extends BaseType {
  StreetName?: string;
  StreetSuffix?: AustralianStreetSuffix;
  StreetType?: AustralianStreetType;
}
interface AustralianStructuredAddressPartialComponentsStreetType
  extends _AustralianStructuredAddressPartialComponentsStreetType {
  constructor: {
    new (): AustralianStructuredAddressPartialComponentsStreetType;
  };
}

/** Purpose - Define suburb or locality as per Australian Standard AS4590 */
export type AustralianSuburbOrPlaceOrLocality = string;
type _AustralianSuburbOrPlaceOrLocality = Primitive._string;

/** Purpose - Define Australian telephone number as per Australian Standard AS4590 */
export type AustralianTelephoneNumber = string;
type _AustralianTelephoneNumber = Primitive._string;

/** Purpose - Define Australian telephone number prefix as per Australian Standard AS4590 */
export type AustralianTelephonePrefix = string;
type _AustralianTelephonePrefix = Primitive._string;

/** Purpose - Define Australian telephone service comment as per Australian Standard AS4590 */
export type AustralianTelephoneServiceComment = string;
type _AustralianTelephoneServiceComment = Primitive._string;

/** Purpose - Define Australian telephone service types
 * Detail - AS4590 indicates that service types need to be agreed between exchnaging parties. It is anticipated this list will be extended as new services are defined. */
export type AustralianTelephoneServiceType =
  | "Fixed Voice"
  | "Mobile Voice"
  | "Fax"
  | "Modem"
  | "Pager";
interface _AustralianTelephoneServiceType extends Primitive._string {
  content: AustralianTelephoneServiceType;
}

/** Participant providing authorisation */
export type AuthorisedByParticipant = string;
type _AuthorisedByParticipant = Primitive._string;

/** User providing authorisation */
export type AuthorisedByUser = string;
type _AuthorisedByUser = Primitive._string;

/** Purpose - The average daily load for a given data steam
 * MSATS Data Model Column - AverageDailyLoad */
export type AveragedDailyLoad = number;
type _AveragedDailyLoad = Primitive._number;

/** Purpose - Base type for all Charge Item definitions
 * Detail - Any network charge item must support these fields. */
interface _BaseChargeItem extends BaseType {
  AdjustmentIndicator: AdjustmentIndicator;
  AdjustmentReason?: string;
  Charge: number;
  Date?: Date;
  GST: GSTData;
  InvoiceNumber: string;
  NetworkRef?: string;
  NMI: NMIWithChecksum;
  OldInvoiceNumber?: string;
  OldTransactionID?: string;
  RetailerRef?: string;
  TransactionDate: Date;
  TransactionID: string;
}
export interface BaseChargeItem extends _BaseChargeItem {
  constructor: { new (): BaseChargeItem };
}
export var BaseChargeItem: { new (): BaseChargeItem };

type BaseChargeItemAdjustmentReasonType = string;
type _BaseChargeItemAdjustmentReasonType = Primitive._string;

/** Purpose - Defines the base type for all Invoice line used for billing
 * Detail - Any network invoice item must support these fields. */
interface _BaseInvoice extends BaseType {
  NMI?: NMIWithChecksum;
  Number: string;
}
export interface BaseInvoice extends _BaseInvoice {
  constructor: { new (): BaseInvoice };
}
export var BaseInvoice: { new (): BaseInvoice };

/** Schema - Gas */
export type BaseLoad = number;
type _BaseLoad = Primitive._number;

/** Purpose - base types from which all gas and hot water meter read data are implemented.
 * Detail - The only limitation made by this definition is that the content will be complex. This is done to
 * alow NSW/ACT Meters to have specific attributes for meters such as Hot Water Meter. */
interface _BaseMultiMeterReadDataType extends BaseType {
  AdjustmentReasonCode?: string;
  ConsumedEnergy?: number;
  ConsumptionFactor?: number;
  EnergyCalculationDatestamp?: Date;
  EnergyCalculationTimestamp?: Date;
  EstimationSubstitutionReasonCode?: string;
  EstimationSubstitutionType?: string;
  HiLowFailure?: string;
  IndexValue?: number;
  MeterCapacityFailure?: string;
  ReadDate?: Date;
  ReasonForRead?: string;
  TypeOfRead?: TypeOfRead;
}
export interface BaseMultiMeterReadDataType
  extends _BaseMultiMeterReadDataType {
  constructor: { new (): BaseMultiMeterReadDataType };
}
export var BaseMultiMeterReadDataType: { new (): BaseMultiMeterReadDataType };

/** Purpose - base types from which all report format definitions derive
 * Detail - The only limitation made by this definition is that the content will be complex. */
interface _BaseReportFormat extends BaseType {}
export interface BaseReportFormat extends _BaseReportFormat {
  constructor: { new (): BaseReportFormat };
}
export var BaseReportFormat: { new (): BaseReportFormat };

/** Purpose - base type from which all report parameter definitions derive.
 * Detail - The minimum parameters required for a report is a report name */
interface _BaseReportParameters extends BaseType {
  MaximumRows?: number;
  ReportName: string;
}
export interface BaseReportParameters extends _BaseReportParameters {
  constructor: { new (): BaseReportParameters };
}
export var BaseReportParameters: { new (): BaseReportParameters };

/** Purpose - base types from which all gas meter data for service order transactions are implemented.
 * Detail - The only limitation made by this definition is that the content will be complex. */
interface _BaseServiceOrderGasMeterData extends BaseType {}
export interface BaseServiceOrderGasMeterData
  extends _BaseServiceOrderGasMeterData {
  constructor: { new (): BaseServiceOrderGasMeterData };
}
export var BaseServiceOrderGasMeterData: {
  new (): BaseServiceOrderGasMeterData;
};

/** Purpose - Identify NMI grouping */
interface _BDTGrouping extends BaseType {
  Name: string;
}
export interface BDTGrouping extends _BDTGrouping {
  constructor: { new (): BDTGrouping };
}
export var BDTGrouping: { new (): BDTGrouping };

/** Purpose - Container for grouping */
interface _BDTGroupings extends BaseType {
  BDTGrouping: BDTGrouping[];
}
export interface BDTGroupings extends _BDTGroupings {
  constructor: { new (): BDTGroupings };
}
export var BDTGroupings: { new (): BDTGroupings };

/** MSATS Data Model Column - ObjRuleDesc */
export type BDTStatus = "UPDATE" | "INSERT";
interface _BDTStatus extends Primitive._string {
  content: BDTStatus;
}

export type BidAllocationType =
  | "Fixed"
  | "Percentage of Surplus"
  | "Fixed of Surplus"
  | "Percentage of UETW"
  | "Fixed of UETW";
interface _BidAllocationType extends Primitive._string {
  content: BidAllocationType;
}

export type BidPriorityType = number;
type _BidPriorityType = Primitive._number;

export type BidRejectionReasonType = number;
type _BidRejectionReasonType = Primitive._number;

/** NSW/ACT Meter Billing Method Types
 * O - Ordinary billing
 * C - Central hot water system billing
 * D - Deduct meter billing */
export type BillingMethodType = "O" | "C" | "D";
interface _BillingMethodType extends Primitive._string {
  content: BillingMethodType;
}

/** For reporting element errors */
interface _BookingElementResponseType extends BaseType {
  operationType: NOSOperationType;
  CompanyElementId: string;
  /** Errors at the booking element level only. */
  Error: NOSErrorType[];
  ServiceAffected: EnumBookingElementServiceAffectedType;
}
export interface BookingElementResponseType
  extends _BookingElementResponseType {
  constructor: { new (): BookingElementResponseType };
}
export var BookingElementResponseType: { new (): BookingElementResponseType };

/** Container for booking elements */
interface _BookingElements extends BaseType {
  BookingElement: BookingElementType[];
}
export interface BookingElements extends _BookingElements {
  constructor: { new (): BookingElements };
}
export var BookingElements: { new (): BookingElements };

/** The Equipment/Services Affected by the Booking. */
interface _BookingElementType extends BaseType {
  /** The TNSP unique identifier of either a Station or item of HV equipment. */
  CompanyElementId: string;
  /** The Service Affected Type summary category. */
  ServiceAffected: EnumBookingElementServiceAffectedType;
  /** Free form details of the serivce affected by the booking (may be an equipment description). This field becomes mandatory when the CompanyElementId is the identifier of a Station. Not required if HV equipment item is selected in CompanyElementId. Field is used to overcome the impracticality of having all secondary equipment in the equipment list. */
  ServiceAffectedDetail?: string;
}
export interface BookingElementType extends _BookingElementType {
  constructor: { new (): BookingElementType };
}
export var BookingElementType: { new (): BookingElementType };

type BookingElementTypeServiceAffectedDetailType = string;
type _BookingElementTypeServiceAffectedDetailType = Primitive._string;

/** Represents a request for current information about a specific Booking or a particular Outage within a Repeating Booking. The attribute, "InfoType" specifies the type of Booking Information to be returned. */
interface _BookingInfoRequestKeyType extends BaseType {
  infoType?: BookingInfoRequestKeyTypeInfoTypeType;
  /** The TNSP generated ID for Booking */
  CompanyBookingId: string;
  /** The TNSP generated ID for an outage. Only required when the information request pertains only to a single outage from a repeating booking. This ID is unique within it's booking */
  CompanyOutageId?: string;
  /** The B2B id of the TNSP that owns the booking/outage. Only required if the requesting TNSP is not the same as the TNSP that owns the Booking/Outage. */
  TNSPId?: PartyIdentifier;
}
export interface BookingInfoRequestKeyType extends _BookingInfoRequestKeyType {
  constructor: { new (): BookingInfoRequestKeyType };
}
export var BookingInfoRequestKeyType: { new (): BookingInfoRequestKeyType };

type BookingInfoRequestKeyTypeInfoTypeType = "all" | "NEMMCO" | "TNSP";
interface _BookingInfoRequestKeyTypeInfoTypeType extends Primitive._string {
  content: BookingInfoRequestKeyTypeInfoTypeType;
}

/** For reporting successful submission or error causing the submission to fail. */
interface _BookingResponseType extends BaseType {
  operationType: NOSOperationType;
  /** Individual booking elements are identified by the combined value of CompanyElementId and ServiceAffected. */
  BookingElement?: BookingElementResponseType[];
  /** Unique id provided by the request initiator for a booking */
  CompanyBookingId: string;
  /** Errors at the booking level only. */
  Error?: NOSErrorType[];
  /** Contains overall success/failure */
  Event: Event;
  /** Individual notes belonging to this booking are identified by the CompanyNoteId. */
  Note?: CompanyNoteResponseType[];
  /** Individual outages belonging to this booking are identified by the CompanyOutageId. */
  Outage?: OutageResponseType[];
}
export interface BookingResponseType extends _BookingResponseType {
  constructor: { new (): BookingResponseType };
}
export var BookingResponseType: { new (): BookingResponseType };

/** A Booking submitted by a TNSP */
interface _BookingType extends BaseType {
  changedBy?: string;
  operationType?: NOSOperationType;
  /** At least one item of equipment is required when creating a new booking. Also booking equipment can not be changed for an existing booking. */
  BookingElements?: BookingElements;
  /** Outage Certainty level indicating how firm the outage booking is. A value is required when creating a new booking. */
  Certainty?: EnumCertaintyType;
  /** This field must contain a value that is unique to the company submitting it. The CompanyBookingId may be reused if the whole booking is withdrawn. */
  CompanyBookingId: string;
  /** A TNSP provided reference code (display only). Typically this is a job number or switching sheet reference. This value is only used if the outage Company RefCode is not set. */
  CompanyRefCode?: string;
  /** Indicates an outage booking is for an outage not under the direct oversight of NEMMCO. A value is required when creating a new booking and is not updatable. */
  InformationOnly?: boolean;
  /** Notes attached to the booking, apply to all outages in that booking. When defining new notes the CompanyNoteId must be unique to the booking. Also the CompanyNoteId of a withdrawn note can not be reused. */
  Notes?: CompanyNotes;
  /** The booking is Not For Publication (to the NEM) for commercial reasons. A value is required when creating a new booking. */
  NotForPublication?: boolean;
  /** At least one outage is required when creating a new booking. When updating an existing booking, only include outages in this list that are new or being modified. Also the CompanyOutageId of a withdrawn outage can not be reused. */
  Outages?: Outages;
  /** Indicates this booking involves primary plant going out of service. A value is required when creating a new booking and is not updatable. */
  PrimaryOut?: boolean;
  /** Indicates an outage booking is part of project related work. */
  ProjectWork?: boolean;
  /** Reason for submission of an outage request. Must match a value from a pre-defined list. A value is required when creating a new booking and is not updatable. */
  Reason?: EnumReasonType;
  /** Required resubmission of booking notes and or booking details. This value is propagated down to outage level if the outage resubmit is not set. A reason is required on Booking withdraw. */
  ResubmitReason?: EnumResubmitReasonType;
  /** The are business rules associated with this value. Allowable values are restricted by the selection of Reason + PrimaryOut. A value is required when creating a new booking and is not updatable. */
  ScopeOfWork?: EnumScopeOfWorkType;
  /** The B2B id of the TNSP that owns the booking. Not required for submission. */
  TNSPId?: PartyIdentifier;
  /** Indicates an outage booking is not part of any planned maintenance work. */
  UnplannedOutage?: boolean;
}
export interface BookingType extends _BookingType {
  constructor: { new (): BookingType };
}
export var BookingType: { new (): BookingType };

type BookingTypeCompanyRefCodeType = string;
type _BookingTypeCompanyRefCodeType = _CompanyRefCodeType;

/** Purpose - Identify a genericParameterType */
interface _BooleanParameter extends _ReportParameterType {
  Description?: string;
  Value: boolean;
}
export interface BooleanParameter extends _BooleanParameter {
  constructor: { new (): BooleanParameter };
}
export var BooleanParameter: { new (): BooleanParameter };

interface _BusinessName extends _BusinessNameBase {
  businessNameTypeCode?: BusinessNameTypeCode;
}
export interface BusinessName extends _BusinessName {
  constructor: { new (): BusinessName };
}
export var BusinessName: { new (): BusinessName };

export type BusinessNameBase = string;
type _BusinessNameBase = Primitive._string;

export type BusinessNameTypeCode =
  | "OTH"
  | "MTR"
  | "OTR"
  | "MN"
  | "PRF"
  | "LGL"
  | "MAU";
interface _BusinessNameTypeCode extends Primitive._string {
  content: BusinessNameTypeCode;
}

/** Application - Bulk Data Tool
 * TransactionExchange - CATSBulkDataResponse
 * TransactionGroup - CATS
 * Priority - Low
 * Purpose - Provide Electricity Standing Data Rows extended with BDTStatus and Event
 * Detail - */
interface _CATSBulkDataBlock extends BaseType {
  BDTGroupings: BDTGroupings;
  Event: Event[];
  NMI: NMI;
  Row: ReplicationBaseRow[];
}
export interface CATSBulkDataBlock extends _CATSBulkDataBlock {
  constructor: { new (): CATSBulkDataBlock };
}
export var CATSBulkDataBlock: { new (): CATSBulkDataBlock };

/** Application - Bulk Data Tool
 * TransactionExchange - CATSBulkDataRequest
 * TransactionGroup - CATS
 * Priority - Low
 * Purpose - Provide the Electricity Standing Data for processing by Bulk Data Tool.
 * Detail -
 *
 * Application - Separate application for Bulk Data Load - BDTLoadRequest
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Submit a standing data for multiple NMIs */
interface _CATSBulkDataRequest extends BaseType {
  version?: r9;
  BulkData: ElectricityStandingDataBDT[];
}
export interface CATSBulkDataRequest extends _CATSBulkDataRequest {
  constructor: { new (): CATSBulkDataRequest };
}
export var CATSBulkDataRequest: { new (): CATSBulkDataRequest };

/** Application - Bulk Data Tool
 * TransactionExchange - CATSBulkDataResponse
 * TransactionGroup - CATS
 * Priority - Low
 * Purpose - Provide Bulk Data Tool processing results. Events may be provided per row and have to be provided per NMI. Events report on success or failure of NMI or row processing.
 * Detail - */
interface _CATSBulkDataResponse extends BaseType {
  version?: r9;
  CATSBulkDataBlock: CATSBulkDataBlock[];
}
export interface CATSBulkDataResponse extends _CATSBulkDataResponse {
  constructor: { new (): CATSBulkDataResponse };
}
export var CATSBulkDataResponse: { new (): CATSBulkDataResponse };

interface _CATSChangeAlert extends BaseType {
  version?: r29;
  Event?: Event[];
  InitiatingRequestID: number;
  Participant: PartyIdentifier;
  Role: string;
  RoleStatus: CATSRoleStatus;
}
export interface CATSChangeAlert extends _CATSChangeAlert {
  constructor: { new (): CATSChangeAlert };
}
export var CATSChangeAlert: { new (): CATSChangeAlert };

/** Purpose - Row of the CATSChangeInitiationRules table
 * MSATS Data Model Table - CATS_CR_Initiation_Rules
 * Replication Table Name - CATSChangeInitiationRules */
interface _CATSChangeInitiationRuleRow extends _ReplicationDateRangeRow {
  version?: r9;
  ChangeReasonCode: string;
  Role: string;
  RoleStatus: CATSRoleStatus;
}
export interface CATSChangeInitiationRuleRow
  extends _CATSChangeInitiationRuleRow {
  constructor: { new (): CATSChangeInitiationRuleRow };
}
export var CATSChangeInitiationRuleRow: { new (): CATSChangeInitiationRuleRow };

/** Purpose - Parameters for a CATS Change Management Report
 * Report Name - ChangeManagement
 * MSATS Report - C3 */
interface _CATSChangeManagementReportParameters extends _BaseReportParameters {
  AsAtDate: Date;
  ExcludeParticipant?: YesNo;
  ExcludeRole?: YesNo;
  FromDate: Date;
  JurisdictionCode: string;
  LastSequenceNumber?: number;
  NMI: NMI;
  NMIClassificationCode: string;
  Participant: PartyIdentifier;
  Role?: string;
  ToDate: Date;
}
export interface CATSChangeManagementReportParameters
  extends _CATSChangeManagementReportParameters {
  constructor: { new (): CATSChangeManagementReportParameters };
}
export var CATSChangeManagementReportParameters: {
  new (): CATSChangeManagementReportParameters;
};

/** Purpose - Identify the type of change request
 * MSATS Data Model Column - CRCode
 * Detail - The change request is the key piece of information in a change request. It drives the logic to determine what other data items are required and the extent of involvement of other parties as the request is processed. */
export type CATSChangeReasonCode = string;
type _CATSChangeReasonCode = Primitive._string;

/** Purpose - Row of the CATSChangeReasonCodes table
 * MSATS Data Model Table - CATS_Change_Reason_Codes
 * Replication Table Name - CATSChangeReasonCodes */
interface _CATSChangeReasonCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSChangeReasonCodeRow extends _CATSChangeReasonCodeRow {
  constructor: { new (): CATSChangeReasonCodeRow };
}
export var CATSChangeReasonCodeRow: { new (): CATSChangeReasonCodeRow };

/** Purpose - Describe the types of change request
 * MSATS Data Model Column - CRDesc
 * Detail - The description is intended to assist in identification of the correct type. The mapping between codee and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type CATSChangeReasonDescription = string;
type _CATSChangeReasonDescription = Primitive._string;

/** Application - Customer Transfer
 * TransactionExchange - CATS Change Request
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Submit a change request */
interface _CATSChangeRequest extends _CATSChangeRequestData {
  version?: r29;
}
export interface CATSChangeRequest extends _CATSChangeRequest {
  constructor: { new (): CATSChangeRequest };
}
export var CATSChangeRequest: { new (): CATSChangeRequest };

/** Purpose - Data provided via a change request */
interface _CATSChangeRequestData extends BaseType {
  AccessContract?: AccessContract;
  ActualChangeDate: Date;
  ActualEndDate?: Date;
  ChangeReasonCode: string;
  InitiatingRequestID?: number;
  MeterReadTypeCode?: string;
  NMIStandingData: ElectricityStandingData | GasStandingData;
  ProposedDate: Date;
}
export interface CATSChangeRequestData extends _CATSChangeRequestData {
  constructor: { new (): CATSChangeRequestData };
}
export var CATSChangeRequestData: { new (): CATSChangeRequestData };

/** Purpose - Data provided on a notification with respect to a change request */
interface _CATSChangeRequestNotificationData extends BaseType {
  ChangeData: CATSChangeRequestData;
  ChangeStatusCode: string;
  Participant: PartyIdentifier;
  RequestID: number;
}
export interface CATSChangeRequestNotificationData
  extends _CATSChangeRequestNotificationData {
  constructor: { new (): CATSChangeRequestNotificationData };
}
export var CATSChangeRequestNotificationData: {
  new (): CATSChangeRequestNotificationData;
};

/** Purpose - Row of the CATS Change Request table
 * MSATS Data Model Table - CATS_Inbound_Change_Request
 * Replication Table Name - CATSChangeRequests */
interface _CATSChangeRequestRow extends _ReplicationBaseRow {
  ActualChangeDate?: Date;
  ActualEndDate?: Date;
  ChangeReasonCode: string;
  ChangeStatusCode: string;
  InitiatingRequestID?: number;
  MeterReadTypeCode?: string;
  NMI?: string;
  Participant: PartyIdentifier;
  ProposedDate?: Date;
  RequestID: number;
  TransactionDate?: Date;
  TransactionID: string;
}
export interface CATSChangeRequestRow extends _CATSChangeRequestRow {
  constructor: { new (): CATSChangeRequestRow };
}
export var CATSChangeRequestRow: { new (): CATSChangeRequestRow };

/** Application - Customer Transfer
 * TransactionExchange - CATS Change Request
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Provide the results of submitting a change request
 * Detail - The primary purpose of this response transaction is to provide the unique identifier allocated by the system to the request. At least one Event element must be present in the response to indicate the success or otherwise of the change request. */
interface _CATSChangeResponse extends BaseType {
  version?: r29;
  Event: Event[];
  RequestID: number;
}
export interface CATSChangeResponse extends _CATSChangeResponse {
  constructor: { new (): CATSChangeResponse };
}
export var CATSChangeResponse: { new (): CATSChangeResponse };

/** Purpose - Row of the CATS Change Response table
 * MSATS Data Model Table - CATS_Outbound_Change_Requests
 * Replication Table Name - CATSChangeResponses */
interface _CATSChangeResponseRow extends _ReplicationBaseRow {
  version?: r29;
  InitiatingTransactionID: string;
  NMI: string;
  Participant: PartyIdentifier;
  RequestID: number;
  Status: AcceptReject;
  TransactionID: string;
  TransactionTypeCode?: string;
}
export interface CATSChangeResponseRow extends _CATSChangeResponseRow {
  constructor: { new (): CATSChangeResponseRow };
}
export var CATSChangeResponseRow: { new (): CATSChangeResponseRow };

/** Purpose - Identify the current status of a change request
 * MSATS Data Model Column - CRStatusCode
 * Detail - Each status represents a particular point in the lifecycle of a change request. */
export type CATSChangeStatusCode = string;
type _CATSChangeStatusCode = Primitive._string;

/** Purpose - Row of the CATSChangeStatusCodes table
 * MSATS Data Model Table - CATS_CR_Status_Codes
 * Replication Table Name - CATSChangeStatusCodes */
interface _CATSChangeStatusCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSChangeStatusCodeRow extends _CATSChangeStatusCodeRow {
  constructor: { new (): CATSChangeStatusCodeRow };
}
export var CATSChangeStatusCodeRow: { new (): CATSChangeStatusCodeRow };

/** Purpose - Describe a change request type
 * MSATS Data Model Column - CRStatusDesc
 * Detail - The description is intended to assist in identification of the correct code. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type CATSChangeStatusDescription = string;
type _CATSChangeStatusDescription = Primitive._string;

/** Application - Customer Transfer
 * TransactionExchange - CATS Change Request Withdrawal
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Withdraw a change request */
interface _CATSChangeWithdrawal extends BaseType {
  version?: r29;
  RequestID: number;
}
export interface CATSChangeWithdrawal extends _CATSChangeWithdrawal {
  constructor: { new (): CATSChangeWithdrawal };
}
export var CATSChangeWithdrawal: { new (): CATSChangeWithdrawal };

/** Application - Customer Transfer
 * TransactionExchange - CATS Data Request
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Request the provision of a subset of the standing data for a NMI */
interface _CATSDataRequest extends BaseType {
  version?: r29;
  ActualChangeDate?: Date;
  InitiatingRequestID: number;
  NMIStandingData: NMIStandingData;
  Role: string;
  RoleStatus: CATSRoleStatus;
}
export interface CATSDataRequest extends _CATSDataRequest {
  constructor: { new (): CATSDataRequest };
}
export var CATSDataRequest: { new (): CATSDataRequest };

/** Purpose - Row of the CATS Data Request table
 * MSATS Data Model Table - CATS_Outbound_Requests
 * Replication Table Name - CATSDataRequests */
interface _CATSDataRequestRow extends _ReplicationBaseRow {
  DataRequest: CATSDataRequestRowDataRequestType;
  Participant: PartyIdentifier;
  TransactionID: string;
}
export interface CATSDataRequestRow extends _CATSDataRequestRow {
  constructor: { new (): CATSDataRequestRow };
}
export var CATSDataRequestRow: { new (): CATSDataRequestRow };

interface _CATSDataRequestRowDataRequestType extends BaseType {}
interface CATSDataRequestRowDataRequestType
  extends _CATSDataRequestRowDataRequestType {
  constructor: { new (): CATSDataRequestRowDataRequestType };
}

/** Purpose - Used as part of change request validation to determine what requirements are to be placed on data fields for completion of the change request
 * MSATS Data Model Column - DataSourceCode */
export type CATSDataSourceCode = string;
type _CATSDataSourceCode = Primitive._string;

/** Purpose - Row of the CATSDataSourceCodes table
 * MSATS Data Model Table - CATS_Data_Source_Codes
 * Replication Table Name - CATSDataSourceCodes */
interface _CATSDataSourceCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSDataSourceCodeRow extends _CATSDataSourceCodeRow {
  constructor: { new (): CATSDataSourceCodeRow };
}
export var CATSDataSourceCodeRow: { new (): CATSDataSourceCodeRow };

/** MSATS Data Model Column - DataSourceDesc */
export type CATSDataSourceDescription = string;
type _CATSDataSourceDescription = Primitive._string;

/** MSATS Data Model Column - DeregCode */
export type CATSDeregistrationCode = string;
type _CATSDeregistrationCode = Primitive._string;

/** Purpose - Row of the CATSDeregistrationCodes table
 * MSATS Data Model Table - CATS_Dereg_Codes
 * Replication Table Name - CATSDeregistrationCodes */
interface _CATSDeregistrationCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSDeregistrationCodeRow extends _CATSDeregistrationCodeRow {
  constructor: { new (): CATSDeregistrationCodeRow };
}
export var CATSDeregistrationCodeRow: { new (): CATSDeregistrationCodeRow };

/** MSATS Data Model Column - DeregDesc */
export type CATSDeregistrationDescription = string;
type _CATSDeregistrationDescription = Primitive._string;

/** MSATS Data Model Column - ErrorCode */
export type CATSErrorCode = number;
type _CATSErrorCode = Primitive._number;

/** MSATS Data Model Column - ErrorDesc */
export type CATSErrorDescription = string;
type _CATSErrorDescription = Primitive._string;

/** Purpose - Row of the Electricity CATS Errors table
 * MSATS Data Model Table - CATS_Outbound_Errors
 * Replication Table Name - CATSErrors */
interface _CATSErrorsRow extends _ReplicationBaseRow {
  Code: number;
  Explanation?: string;
  TransactionID: string;
}
export interface CATSErrorsRow extends _CATSErrorsRow {
  constructor: { new (): CATSErrorsRow };
}
export var CATSErrorsRow: { new (): CATSErrorsRow };

/** Purpose - Row of the CATSJurisdictionalRules table
 * MSATS Data Model Table - CATS_Jurisdictional_Rules
 * Replication Table Name - CATSJurisdictionalRules */
interface _CATSJurisdictionalRuleRow extends _ReplicationDateRangeRow {
  ChangeReasonCode: string;
  JurisdictionCode: string;
  NMIClassificationCode: string;
  NotificationPeriod: number;
  ObjectionClearancePeriod: number;
  ObjectionLodgementPeriod: number;
  ProspectiveDays: number;
  RetrospectiveDays: number;
  TimeOfChange?: string;
}
export interface CATSJurisdictionalRuleRow extends _CATSJurisdictionalRuleRow {
  constructor: { new (): CATSJurisdictionalRuleRow };
}
export var CATSJurisdictionalRuleRow: { new (): CATSJurisdictionalRuleRow };

/** Purpose - Parameters for a CATS Master Report
 * Report Name - Master
 * MSATS Report - C4 */
interface _CATSMasterReportParameters extends _BaseReportParameters {
  AsAtDate: Date;
  ExcludeParticipant?: YesNo;
  ExcludeRole?: YesNo;
  FromDate: Date;
  JurisdictionCode: string;
  LastSequenceNumber?: number;
  NMI: NMI;
  NMIClassificationCode: string;
  Participant: PartyIdentifier;
  ReportType: CATSMasterReportParametersReportTypeType;
  Role: string;
  ToDate: Date;
}
export interface CATSMasterReportParameters
  extends _CATSMasterReportParameters {
  constructor: { new (): CATSMasterReportParameters };
}
export var CATSMasterReportParameters: { new (): CATSMasterReportParameters };

type CATSMasterReportParametersReportTypeType = "Summary" | "Detailed";
interface _CATSMasterReportParametersReportTypeType extends Primitive._string {
  content: CATSMasterReportParametersReportTypeType;
}

/** Purpose - Format for a CATS MSATS Limits Report
 * Report Name - MsatsLimits */
interface _CATSMsatsLimitsReportFormat extends _BaseReportFormat {
  MsatsLimits: MsatsLimits;
}
export interface CATSMsatsLimitsReportFormat
  extends _CATSMsatsLimitsReportFormat {
  constructor: { new (): CATSMsatsLimitsReportFormat };
}
export var CATSMsatsLimitsReportFormat: { new (): CATSMsatsLimitsReportFormat };

/** Purpose - Parameters for a CATS MSATS Limits Report
 * Report Name - MsatsLimits */
interface _CATSMsatsLimitsReportParameters extends _BaseReportParameters {
  version?: r28;
}
export interface CATSMsatsLimitsReportParameters
  extends _CATSMsatsLimitsReportParameters {
  constructor: { new (): CATSMsatsLimitsReportParameters };
}
export var CATSMsatsLimitsReportParameters: {
  new (): CATSMsatsLimitsReportParameters;
};

/** Purpose - Row of the CATS Network Tariff Codes table
 * MSATS Data Model Table - CATS_networktariff_Codes
 * Replication Table Name - CATSNetworkTariffCodes */
interface _CATSNetworkTariffCodeRow extends _ReplicationDateRangeRow {
  version?: r10;
  Code: string;
  Description: string;
  LNSP: PartyIdentifier;
}
export interface CATSNetworkTariffCodeRow extends _CATSNetworkTariffCodeRow {
  constructor: { new (): CATSNetworkTariffCodeRow };
}
export var CATSNetworkTariffCodeRow: { new (): CATSNetworkTariffCodeRow };

/** Purpose - Format for a CATS New Participant Access to Master Record Report
 * Report Name - NewParticipantAccess
 * MSATS Report - C7 */
interface _CATSNewParticipantAccessReportFormat extends _BaseReportFormat {
  NMIStandingData: NMIStandingData;
}
export interface CATSNewParticipantAccessReportFormat
  extends _CATSNewParticipantAccessReportFormat {
  constructor: { new (): CATSNewParticipantAccessReportFormat };
}
export var CATSNewParticipantAccessReportFormat: {
  new (): CATSNewParticipantAccessReportFormat;
};

/** Purpose - Parameters for a CATS New Participant Access to Master Record Report
 * Report Name - NewParticipantAccess
 * MSATS Report - C7 */
interface _CATSNewParticipantAccessReportParameters
  extends _BaseReportParameters {
  RequestID: number;
}
export interface CATSNewParticipantAccessReportParameters
  extends _CATSNewParticipantAccessReportParameters {
  constructor: { new (): CATSNewParticipantAccessReportParameters };
}
export var CATSNewParticipantAccessReportParameters: {
  new (): CATSNewParticipantAccessReportParameters;
};

/** Purpose - Parameters for a CATS NMI Audit Report
 * Report Name - NMIAudit
 * MSATS Report - C2 */
interface _CATSNMIAuditReportParameters extends _BaseReportParameters {
  AsAtFromDate: Date;
  AsAtToDate: Date;
  FromDate: Date;
  NMI: NMI;
  ToDate: Date;
}
export interface CATSNMIAuditReportParameters
  extends _CATSNMIAuditReportParameters {
  constructor: { new (): CATSNMIAuditReportParameters };
}
export var CATSNMIAuditReportParameters: {
  new (): CATSNMIAuditReportParameters;
};

/** Purpose - Parameters for a CATS NMI Discovery Report
 * Report Name - NMIDiscovery
 * MSATS Report - C6
 * Detail - The NMI/Jurisdiction choice is ignored if a report type of Source and Content is selected. One of NMI/Jurisdiction should however be provided for a report type of Statistic. */
interface _CATSNMIDiscoveryReportParameters extends _BaseReportParameters {
  FromDate: Date;
  JurisdictionCode?: string;
  LastSequenceNumber?: number;
  NMI?: NMI;
  Participant: PartyIdentifier;
  ReportType: CATSNMIDiscoveryReportParametersReportTypeType;
  ToDate: Date;
}
export interface CATSNMIDiscoveryReportParameters
  extends _CATSNMIDiscoveryReportParameters {
  constructor: { new (): CATSNMIDiscoveryReportParameters };
}
export var CATSNMIDiscoveryReportParameters: {
  new (): CATSNMIDiscoveryReportParameters;
};

type CATSNMIDiscoveryReportParametersReportTypeType =
  | "SourceContent"
  | "Statistic";
interface _CATSNMIDiscoveryReportParametersReportTypeType
  extends Primitive._string {
  content: CATSNMIDiscoveryReportParametersReportTypeType;
}

/** Application - Customer Transfer
 * TransactionExchange - CATS Notification
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Provide details of an accepted change request or objection */
interface _CATSNotification extends BaseType {
  version?: r29;
  ChangeRequest: CATSChangeRequestNotificationData;
  /** This is what the Jurisdiction code would be after CR completes (if the jurisdiction code is being changed in the CR) */
  JurisdictionCode?: string;
  /** This is what the NMI Classification code would be after CR completes (if the NMI Classification code is being changed in the CR) */
  NMIClassificationCode?: string;
  /** Will be populated only in notifications of CRs which are for transfer of de-energised NMIs. This would be the current value of the NMI Classification code. It could be different than what the NMI Classification code would be after CR completes (if the NMI Classification code is also being changed in the CR - which currently is not allowed in tranfer CRs) */
  NMIStatus?: string;
  Objection?: CATSObjectionNotificationData;
  ObjectionEndDate?: Date;
  Role: string;
  RoleStatus: CATSRoleStatus;
}
export interface CATSNotification extends _CATSNotification {
  constructor: { new (): CATSNotification };
}
export var CATSNotification: { new (): CATSNotification };

/** Purpose - Maximum number of business days that must elapse after the proposed change date if no actual change date supplied before retailers should be notified
 * MSATS Data Model Column - NotificationPeriod */
export type CATSNotificationPeriod = number;
type _CATSNotificationPeriod = Primitive._number;

/** Purpose - Row of the CATS Notification table
 * MSATS Data Model Table - CATS_Outbound_Notifications
 * Replication Table Name - CATSNotifications */
interface _CATSNotificationRow extends _ReplicationBaseRow {
  ChangeStatusCode: string;
  ObjectingParticipant?: PartyIdentifier;
  ObjectionAction?: CATSObjectionAction;
  ObjectionCode?: string;
  ObjectionID?: number;
  Participant: PartyIdentifier;
  RequestID: number;
  Role: string;
  RoleStatus: CATSRoleStatus;
  TransactionID: string;
}
export interface CATSNotificationRow extends _CATSNotificationRow {
  constructor: { new (): CATSNotificationRow };
}
export var CATSNotificationRow: { new (): CATSNotificationRow };

/** Purpose - Row of the CATSNotificationRules table
 * MSATS Data Model Table - CATS_Notification_Rules
 * Replication Table Name - CATSNotificationRules */
interface _CATSNotificationRuleRow extends _ReplicationDateRangeRow {
  ChangeReasonCode: string;
  ChangeStatusCode: string;
  Role: string;
  RoleStatus: CATSRoleStatus;
  TransactionTypeCode: string;
}
export interface CATSNotificationRuleRow extends _CATSNotificationRuleRow {
  constructor: { new (): CATSNotificationRuleRow };
}
export var CATSNotificationRuleRow: { new (): CATSNotificationRuleRow };

/** Purpose - indicate on a notification whether an objection is raised or withdrawn.
 * MSATS Data Model Column - ObjectionAction */
export type CATSObjectionAction = "Raised" | "Withdrawn";
interface _CATSObjectionAction extends Primitive._string {
  content: CATSObjectionAction;
}

/** Purpose - Maximum number of business days permitted in the objection clearance period
 * MSATS Data Model Column - ObjClearPeriod */
export type CATSObjectionClearancePeriod = number;
type _CATSObjectionClearancePeriod = Primitive._number;

/** Purpose - Indicate the reason for objecting to a change request
 * MSATS Data Model Column - ObjectionCode */
export type CATSObjectionCode = string;
type _CATSObjectionCode = Primitive._string;

/** Purpose - Row of the CATSObjectionCodes table
 * MSATS Data Model Table - CATS_Objection_Codes
 * Replication Table Name - CATSObjectionCodes */
interface _CATSObjectionCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSObjectionCodeRow extends _CATSObjectionCodeRow {
  constructor: { new (): CATSObjectionCodeRow };
}
export var CATSObjectionCodeRow: { new (): CATSObjectionCodeRow };

/** Purpose - Data provided via an objection */
interface _CATSObjectionData extends BaseType {
  InitiatingRequestID: number;
  ObjectionCode: string;
  Role: string;
}
export interface CATSObjectionData extends _CATSObjectionData {
  constructor: { new (): CATSObjectionData };
}
export var CATSObjectionData: { new (): CATSObjectionData };

/** Purpose - Describe the reason for objecting to a change request
 * MSATS Data Model Column - ObjectionDesc
 * Detail - The description is intended to assist in identification of the correct code. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type CATSObjectionDescription = string;
type _CATSObjectionDescription = Primitive._string;

/** Purpose - Uniquely identify each objection
 * MSATS Data Model Column - ObjectionID */
export type CATSObjectionIdentifier = number;
type _CATSObjectionIdentifier = Primitive._number;

/** Purpose - Maximum number of business days permitted in the objection logging period
 * MSATS Data Model Column - ObjLogPeriod */
export type CATSObjectionLodgementPeriod = number;
type _CATSObjectionLodgementPeriod = Primitive._number;

/** Purpose - Data provided on a notification with respect to an objection */
interface _CATSObjectionNotificationData extends BaseType {
  ObjectionAction: CATSObjectionAction;
  ObjectionData: CATSObjectionData;
  ObjectionDate?: Date;
  ObjectionID: number;
  Participant: PartyIdentifier;
}
export interface CATSObjectionNotificationData
  extends _CATSObjectionNotificationData {
  constructor: { new (): CATSObjectionNotificationData };
}
export var CATSObjectionNotificationData: {
  new (): CATSObjectionNotificationData;
};

/** Application - Customer Transfer
 * TransactionExchange - CATS Objection Request
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Submit a objection request */
interface _CATSObjectionRequest extends _CATSObjectionData {
  version?: r29;
}
export interface CATSObjectionRequest extends _CATSObjectionRequest {
  constructor: { new (): CATSObjectionRequest };
}
export var CATSObjectionRequest: { new (): CATSObjectionRequest };

/** Application - Customer Transfer
 * TransactionExchange - CATS Objection Request
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Provide the results of submitting an objection request
 * Detail - The primary purpose of this response transaction is to provide the unique identifier allocated by the system to the objection. At least one Event element must be present in the response to indicate the success or otherwise of the objection request. */
interface _CATSObjectionResponse extends BaseType {
  version?: r29;
  Event: Event[];
  ObjectionID: number;
}
export interface CATSObjectionResponse extends _CATSObjectionResponse {
  constructor: { new (): CATSObjectionResponse };
}
export var CATSObjectionResponse: { new (): CATSObjectionResponse };

/** Purpose - Row of the Electricity Objection Response table
 * MSATS Data Model Table - CATS_Outbound_Objections
 * Replication Table Name - ElectricityObjectionResponses */
interface _CATSObjectionResponseRow extends _ReplicationBaseRow {
  version?: r29;
  InitiatingTransactionID: string;
  ObjectionCode: string;
  ObjectionID: number;
  Participant: PartyIdentifier;
  RequestID: number;
  Role: string;
  Status: AcceptReject;
  TransactionID: string;
  TransactionTypeCode?: string;
}
export interface CATSObjectionResponseRow extends _CATSObjectionResponseRow {
  constructor: { new (): CATSObjectionResponseRow };
}
export var CATSObjectionResponseRow: { new (): CATSObjectionResponseRow };

/** Purpose - Row of the CATS Objection table
 * MSATS Data Model Table - CATS_Inbound_Objections
 * Replication Table Name - CATSObjections */
interface _CATSObjectionRow extends _ReplicationBaseRow {
  version?: r29;
  ObjectionCode: string;
  ObjectionID: number;
  Participant: PartyIdentifier;
  RequestID: number;
  Role?: string;
  TransactionID: string;
  TransactionTypeCode?: string;
}
export interface CATSObjectionRow extends _CATSObjectionRow {
  constructor: { new (): CATSObjectionRow };
}
export var CATSObjectionRow: { new (): CATSObjectionRow };

/** MSATS Data Model Column - ObjRuleDesc */
export type CATSObjectionRuleDescription = string;
type _CATSObjectionRuleDescription = Primitive._string;

/** Purpose - Row of the CATSObjectionRules table
 * MSATS Data Model Table - CATS_Objection_Rules
 * Replication Table Name - CATSObjectionRules */
interface _CATSObjectionRuleRow extends _ReplicationDateRangeRow {
  ChangeReasonCode: string;
  Description: string;
  JurisdictionCode: string;
  NMIClassificationCode: string;
  ObjectionCode: string;
  Role: string;
  RoleStatus: CATSRoleStatus;
}
export interface CATSObjectionRuleRow extends _CATSObjectionRuleRow {
  constructor: { new (): CATSObjectionRuleRow };
}
export var CATSObjectionRuleRow: { new (): CATSObjectionRuleRow };

/** Application - Customer Transfer
 * TransactionExchange - CATS Objection Withdrawal
 * TransactionGroup - CATS
 * Priority - Medium
 * Purpose - Withdraw an objection request
 * Detail - Logically, all that is needed here is the objectionID much as all that is provided to withdraw a change request is the requestID. The remaining fields are purely for cross-validation that the correct objectionID has been provided, and exist purely because of the structure of the MSATS functional specification. */
interface _CATSObjectionWithdrawal extends BaseType {
  version?: r29;
  InitiatingRequestID: number;
  ObjectionCode: string;
  ObjectionID: number;
  Role: string;
}
export interface CATSObjectionWithdrawal extends _CATSObjectionWithdrawal {
  constructor: { new (): CATSObjectionWithdrawal };
}
export var CATSObjectionWithdrawal: { new (): CATSObjectionWithdrawal };

/** Purpose - Format for a CATS Participant System Status Report
 * Report Name - ParticipantSystemStatus */
interface _CATSParticipantSystemStatusReportFormat extends _BaseReportFormat {
  ParticipantSystemsStatus: ParticipantSystemsStatus;
}
export interface CATSParticipantSystemStatusReportFormat
  extends _CATSParticipantSystemStatusReportFormat {
  constructor: { new (): CATSParticipantSystemStatusReportFormat };
}
export var CATSParticipantSystemStatusReportFormat: {
  new (): CATSParticipantSystemStatusReportFormat;
};

/** Purpose - Maximum number of business days into the future for a proposed or actual change date
 * MSATS Data Model Column - ProspectiveDays */
export type CATSProspectiveDays = number;
type _CATSProspectiveDays = Primitive._number;

/** Purpose - indicate the type of meter read desired for the chnage request
 * MSATS Data Model Column - ReadTypeCode
 * Detail - This field provides information to the meter data provider as to the type of read required for a change request, e.g. estimated read or  next scheduled read. It should not be confused with the ReadTypeCode included in the meter register data. */
export type CATSReadTypeCode = string;
type _CATSReadTypeCode = Primitive._string;

/** Purpose - Row of the CATSReadTypeCodes table
 * MSATS Data Model Table - CATS_Read_Type_Codes
 * Replication Table Name - CATSReadTypeCodes */
interface _CATSReadTypeCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSReadTypeCodeRow extends _CATSReadTypeCodeRow {
  constructor: { new (): CATSReadTypeCodeRow };
}
export var CATSReadTypeCodeRow: { new (): CATSReadTypeCodeRow };

/** Purpose - Describe a change request read type code
 * MSATS Data Model Column - ReadTypeDesc
 * Detail - The description is intended to assist in identification of the correct code. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type CATSReadTypeDescription = string;
type _CATSReadTypeDescription = Primitive._string;

/** Purpose - Uniquely identify each change request
 * MSATS Data Model Column - RequestD */
export type CATSRequestIdentifier = number;
type _CATSRequestIdentifier = Primitive._number;

/** Purpose - Maximum number of business days in the past for which a retrospective change may occur
 * MSATS Data Model Column - RetrospectiveDays */
export type CATSRetrospectiveDays = number;
type _CATSRetrospectiveDays = Primitive._number;

/** MSATS Data Model Column - RetroCode */
export type CATSRetrospectivityCode = string;
type _CATSRetrospectivityCode = Primitive._string;

/** Purpose - Row of the CATSRetrospectivityCodes table
 * MSATS Data Model Table - CATS_Retrospectivity_Codes
 * Replication Table Name - CATSRetrospectivityCodes */
interface _CATSRetrospectivityCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSRetrospectivityCodeRow
  extends _CATSRetrospectivityCodeRow {
  constructor: { new (): CATSRetrospectivityCodeRow };
}
export var CATSRetrospectivityCodeRow: { new (): CATSRetrospectivityCodeRow };

/** MSATS Data Model Column - RetroDesc */
export type CATSRetrospectivityDescription = string;
type _CATSRetrospectivityDescription = Primitive._string;

/** Purpose - Indicates of the the role is currently being played (C) or is proposed to be played (N).
 * MSATS Data Model Column - RoleStatus */
export type CATSRoleStatus = "N" | "C";
interface _CATSRoleStatus extends Primitive._string {
  content: CATSRoleStatus;
}

/** Purpose - Parameter definition for  SDR Traffic Light Report
 * Report Name - SDR Export
 * MSATS Report - STND_DAT_TRAFFICLGHT */
interface _CATSSDRTrafficLightReportParameters extends _BaseReportParameters {
  version?: r19;
  StatsDate: Date;
}
export interface CATSSDRTrafficLightReportParameters
  extends _CATSSDRTrafficLightReportParameters {
  constructor: { new (): CATSSDRTrafficLightReportParameters };
}
export var CATSSDRTrafficLightReportParameters: {
  new (): CATSSDRTrafficLightReportParameters;
};

/** Purpose - Parameters for a CATS Snapshot Report. Report Name
 * Snapshot MSATS Report */
interface _CATSSnapshotReportParameters extends _BaseReportParameters {
  AsAtDateTime: Date;
  LastSequenceNumber?: number;
  Participant: PartyIdentifier;
  Tables: Tables;
}
export interface CATSSnapshotReportParameters
  extends _CATSSnapshotReportParameters {
  constructor: { new (): CATSSnapshotReportParameters };
}
export var CATSSnapshotReportParameters: {
  new (): CATSSnapshotReportParameters;
};

/** Purpose - Row of the CATSStandingDataAccessRules table
 * MSATS Data Model Table - CATS_standing_data_access_rules
 * Replication Table Name - CATSStandingDataAccessRules */
interface _CATSStandingDataAccessRuleRow extends _ReplicationDateRangeRow {
  version?: r10;
  DataItem: string;
  JurisdictionCode: string;
  Role: string;
  TableName: string;
}
export interface CATSStandingDataAccessRuleRow
  extends _CATSStandingDataAccessRuleRow {
  constructor: { new (): CATSStandingDataAccessRuleRow };
}
export var CATSStandingDataAccessRuleRow: {
  new (): CATSStandingDataAccessRuleRow;
};

/** Purpose - Parameter definition for  Standing Data Report
 * Report Name - Participant Standing Data  report
 * MSATS Report - STANDING_DATA_QUALITY */
interface _CATSStandingDataQualityReportParameters
  extends _BaseReportParameters {
  version?: r19;
  RunDate: Date;
}
export interface CATSStandingDataQualityReportParameters
  extends _CATSStandingDataQualityReportParameters {
  constructor: { new (): CATSStandingDataQualityReportParameters };
}
export var CATSStandingDataQualityReportParameters: {
  new (): CATSStandingDataQualityReportParameters;
};

/** Purpose - Parameters for a CATS Statistics Report
 * Report Name - Statistics
 * MSATS Report - C5 */
interface _CATSStatisticsReportParameters extends _BaseReportParameters {
  FromDate: Date;
  ReportType: CATSStatisticsReportParametersReportTypeType;
  ToDate: Date;
}
export interface CATSStatisticsReportParameters
  extends _CATSStatisticsReportParameters {
  constructor: { new (): CATSStatisticsReportParameters };
}
export var CATSStatisticsReportParameters: {
  new (): CATSStatisticsReportParameters;
};

type CATSStatisticsReportParametersReportTypeType = "Public" | "Internal";
interface _CATSStatisticsReportParametersReportTypeType
  extends Primitive._string {
  content: CATSStatisticsReportParametersReportTypeType;
}

/** Purpose - Row of the CATSStreamlinedCR Codes table
 * MSATS Data Model Table - CATS_Streamlined_CR_Codes
 * Replication Table Name - CATSStreamlineCRCodes */
interface _CATSStreamlinedCRCodeRow extends _ReplicationDateRangeRow {
  version?: r10;
  Code: string;
}
export interface CATSStreamlinedCRCodeRow extends _CATSStreamlinedCRCodeRow {
  constructor: { new (): CATSStreamlinedCRCodeRow };
}
export var CATSStreamlinedCRCodeRow: { new (): CATSStreamlinedCRCodeRow };

/** Purpose - Row of the CATSTransactionFieldValidations table
 * MSATS Data Model Table - CATS_Trans_Field_Validation
 * Replication Table Name - CATSTransactionFieldValidations */
interface _CATSTransactionFieldValidationRow extends _ReplicationDateRangeRow {
  version?: r19;
  ChangeReasonCode: string;
  DataSourceCode: string;
  Field: string;
  MustComplete?: YesNo;
  ProvideRole?: string;
  RoleStatusNeeded?: YesNo;
  Table: string;
  TransactionTypeCode: string;
}
export interface CATSTransactionFieldValidationRow
  extends _CATSTransactionFieldValidationRow {
  constructor: { new (): CATSTransactionFieldValidationRow };
}
export var CATSTransactionFieldValidationRow: {
  new (): CATSTransactionFieldValidationRow;
};

/** Purpose - Internal code used to identify trasnactions within the various rule tables that are used to validate transactions
 * MSATS Data Model Column - TransTypeCode */
export type CATSTransactionTypeCode = string;
type _CATSTransactionTypeCode = Primitive._string;

/** Purpose - Row of the CATSTransactionTypeCodes table
 * MSATS Data Model Table - CATS_Trans_Type_Codes
 * Replication Table Name - CATSTransactionTypeCodes */
interface _CATSTransactionTypeCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface CATSTransactionTypeCodeRow
  extends _CATSTransactionTypeCodeRow {
  constructor: { new (): CATSTransactionTypeCodeRow };
}
export var CATSTransactionTypeCodeRow: { new (): CATSTransactionTypeCodeRow };

/** MSATS Data Model Column - TransTypeDesc */
export type CATSTransactionTypeDescription = string;
type _CATSTransactionTypeDescription = Primitive._string;

/** Purpose - defines the footer data type of the network charge items, used on is own for "013, 932, 942" and in composition for other footers */
interface _ChargeFooter extends BaseType {
  RecordCount: number;
  TotalAmount: number;
}
export interface ChargeFooter extends _ChargeFooter {
  constructor: { new (): ChargeFooter };
}
export var ChargeFooter: { new (): ChargeFooter };

/** Purpose - Define Charge Types as used by LNSPs. The following types of charges: NUoS, excluded service, GSL credit payments and meter reading are identified by this code". */
export type ChargeType =
  | "NUOS Charge"
  | "Event Based Charge"
  | "GSL Credit Charge"
  | "Excluded Service Charge"
  | "Interest Charge";
interface _ChargeType extends Primitive._string {
  content: ChargeType;
}

/** Purpose - Comment Line
 * Detail - Maximum of 80 charactors per line */
export type CommentLine = string;
type _CommentLine = Primitive._string;

/** A factor applicable to hot water meter installations – Energy/Total Litres Heated */
export type CommonFactorType = number;
type _CommonFactorType = Primitive._number;

/** The ID (set by Company (TNSP)) of the submitted booking */
export type CompanyBookingIdType = string;
type _CompanyBookingIdType = Primitive._string;

/** The ID (set by Company (TNSP)) of the equipment involved in the booking */
export type CompanyElementIdType = string;
type _CompanyElementIdType = Primitive._string;

/** The ID (set by Company (TNSP)) of the submitted note */
export type CompanyNoteIdType = string;
type _CompanyNoteIdType = Primitive._string;

/** For reporting booking/outage note errors */
interface _CompanyNoteResponseType extends BaseType {
  operationType: NOSOperationType;
  CompanyNoteId: string;
  /** Errors at the note level only. */
  Error: NOSErrorType[];
}
export interface CompanyNoteResponseType extends _CompanyNoteResponseType {
  constructor: { new (): CompanyNoteResponseType };
}
export var CompanyNoteResponseType: { new (): CompanyNoteResponseType };

/** Container for company notes */
interface _CompanyNotes extends BaseType {
  /** A note can not contain both a blank plain text section and an empty file attachment. */
  Note: CompanyNoteType[];
}
export interface CompanyNotes extends _CompanyNotes {
  constructor: { new (): CompanyNotes };
}
export var CompanyNotes: { new (): CompanyNotes };

/** Note that belongs to an Outage or Booking. */
interface _CompanyNoteType extends _NoteType {
  changedBy?: string;
  operationType?: NOSOperationType;
  /** Company provided id, unique to outage or booking. */
  CompanyNoteId: string;
  /** A value is required when creatiing a new note. This element indicates that the current note can be included in the RIEMNS report. Can not be modifed once set. */
  IncludeInRiemns?: boolean;
  /** A value is required when creating a new note and is not updatable. */
  Type?: EnumCompanyNoteType;
}
export interface CompanyNoteType extends _CompanyNoteType {
  constructor: { new (): CompanyNoteType };
}
export var CompanyNoteType: { new (): CompanyNoteType };

/** The ID (set by Company (TNSP)) of the submitted outage */
export type CompanyOutageIdType = string;
type _CompanyOutageIdType = Primitive._string;

/** Common definition of a company provided booking reference (display only) */
export type CompanyRefCodeType = string;
type _CompanyRefCodeType = Primitive._string;

interface _ConcessionCard extends BaseType {
  rebateType?: RebateType;
  FromDate?: Date;
  Number: string;
  ToDate?: Date;
}
export interface ConcessionCard extends _ConcessionCard {
  constructor: { new (): ConcessionCard };
}
export var ConcessionCard: { new (): ConcessionCard };

type ConcessionCardNumberType = string;
type _ConcessionCardNumberType = Primitive._string;

/** Purpose - establishes relationship between the dispute and the resolution items */
interface _Confirmation extends BaseType {
  Dispute: DisputeItem;
  Resolution: ResolutionItem;
}
export interface Confirmation extends _Confirmation {
  constructor: { new (): Confirmation };
}
export var Confirmation: { new (): Confirmation };

/** Purpose - Parent container for list of connected meters. */
interface _ConnectedMeters extends BaseType {
  SerialNumber?: string[];
}
export interface ConnectedMeters extends _ConnectedMeters {
  constructor: { new (): ConnectedMeters };
}
export var ConnectedMeters: { new (): ConnectedMeters };

/** Purpose - Information about the configuration of the connection point - ConnectionConfiguration */
export type ConnectionConfiguration = string;
type _ConnectionConfiguration = Primitive._string;

/** A factor based on the calculation of HV * Volume Correction Factor */
export type ConsumptionFactorType = number;
type _ConsumptionFactorType = Primitive._number;

export type ConsumptionLitresType = number;
type _ConsumptionLitresType = Primitive._number;

/** Purpose - Defines numeric data type restricted to 9.5 digits */
export type ConsumptionVolume = number;
type _ConsumptionVolume = Primitive._number;

interface _ContactDetail extends BaseType {
  ContactName: PersonName;
  ContactNumber: AustralianPhoneNumber;
}
export interface ContactDetail extends _ContactDetail {
  constructor: { new (): ContactDetail };
}
export var ContactDetail: { new (): ContactDetail };

/** Purpose - Define the basic set of contact methods. */
export type ContactMethod =
  | "Postal Address"
  | "Site Address"
  | "Email Address"
  | "Phone";
interface _ContactMethod extends Primitive._string {
  content: ContactMethod;
}

export type ControlChannel = string;
type _ControlChannel = Primitive._string;

/** Purpose - Define the structure of Control Equipment detail. */
interface _ControlEquipment extends BaseType {
  ConnectedMeters?: ConnectedMeters;
  ControlChannel?: string;
  ControlEquipmentNumber?: string;
  ControlEquipmentType?: ControlEquipmentType;
}
export interface ControlEquipment extends _ControlEquipment {
  constructor: { new (): ControlEquipment };
}
export var ControlEquipment: { new (): ControlEquipment };

/** Purpose - Parent container for list of Control equipment. */
interface _ControlEquipments extends BaseType {
  ControlEquipment: ControlEquipment[];
}
export interface ControlEquipments extends _ControlEquipments {
  constructor: { new (): ControlEquipments };
}
export var ControlEquipments: { new (): ControlEquipments };

export type ControlEquipmentSerialNumber = string;
type _ControlEquipmentSerialNumber = Primitive._string;

/** Indicates the control equipmeht type
 * Version 1.0 additions
 * - Internal Relay
 * - External Relay
 * - Internal Time Switch
 * - External Time Switch */
export type ControlEquipmentType =
  | "Internal Relay"
  | "External Relay"
  | "Internal Time Switch"
  | "External Time Switch";
interface _ControlEquipmentType extends Primitive._string {
  content: ControlEquipmentType;
}

/** Purpose - Network charge record type - "941" - CreditBalanceDetail */
interface _CreditBalanceDetail extends BaseType {
  Amount: number;
  Balance: number;
  InvoiceNumber: string;
  NMI: NMIWithChecksum;
}
export interface CreditBalanceDetail extends _CreditBalanceDetail {
  constructor: { new (): CreditBalanceDetail };
}
export var CreditBalanceDetail: { new (): CreditBalanceDetail };

interface _CreditData extends BaseType {
  Credits: CreditDataCreditsType;
  Header: NETBHeader;
  Summary: ChargeFooter;
}
export interface CreditData extends _CreditData {
  constructor: { new (): CreditData };
}
export var CreditData: { new (): CreditData };

interface _CreditDataCreditsType extends BaseType {
  CreditBalance: CreditBalanceDetail[];
  OutstandingInvoice: OustandingInvoiceDetail[];
}
interface CreditDataCreditsType extends _CreditDataCreditsType {
  constructor: { new (): CreditDataCreditsType };
}

/** Application - Network Billing
 * TransactionExchange -
 * TransactionGroup - NETB
 * Priority - Medium
 * Purpose - Submit dispute status change details to the Retailer
 *
 * NEM
 * B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * B2B_NB_SA_IP_v1-0_-_Effective_13Apr2003.doc
 * This complex type defines the transaction "..." - unknown in tech spec v1.3
 * This transaction is for use only in SA and NSW. */
interface _CreditNotification extends BaseType {
  version?: r11;
  CreditData: CreditData;
  CSVCreditBalance: CSVRequestFormat;
  CSVOutstandingInvoice: CSVRequestFormat;
}
export interface CreditNotification extends _CreditNotification {
  constructor: { new (): CreditNotification };
}
export var CreditNotification: { new (): CreditNotification };

interface _CSVDataWithName extends Primitive._string {
  Description: string;
  Name: string;
}
export interface CSVDataWithName extends _CSVDataWithName {
  constructor: { new (): CSVDataWithName };
}
export var CSVDataWithName: { new (): CSVDataWithName };

type CSVDataWithNameDescriptionType = string;
type _CSVDataWithNameDescriptionType = _NonZeroLengthString;

type CSVDataWithNameNameType = string;
type _CSVDataWithNameNameType = _NonZeroLengthString;

/** Purpose - container for a CSV formatted report
 * Detail - Where the report is using CSV as the output format, this generic container may be used to return the results. */
interface _CSVReportFormat extends _BaseReportFormat {
  CSVData: string;
}
export interface CSVReportFormat extends _CSVReportFormat {
  constructor: { new (): CSVReportFormat };
}
export var CSVReportFormat: { new (): CSVReportFormat };

interface _CSVRequestFormat extends BaseType {
  CSVData: string;
  RecordCount: number;
}
export interface CSVRequestFormat extends _CSVRequestFormat {
  constructor: { new (): CSVRequestFormat };
}
export var CSVRequestFormat: { new (): CSVRequestFormat };

interface _CSVResponseFormat extends _CSVRequestFormat {
  Event?: Event[];
}
export interface CSVResponseFormat extends _CSVResponseFormat {
  constructor: { new (): CSVResponseFormat };
}
export var CSVResponseFormat: { new (): CSVResponseFormat };

export type Currency = number;
type _Currency = Primitive._number;

/** Schema - MeterDataManagement */
interface _CurrentRetailerConfirmationRequest extends BaseType {
  version?: r9;
  CSVCurrentRetailerData: CSVRequestFormat;
}
export interface CurrentRetailerConfirmationRequest
  extends _CurrentRetailerConfirmationRequest {
  constructor: { new (): CurrentRetailerConfirmationRequest };
}
export var CurrentRetailerConfirmationRequest: {
  new (): CurrentRetailerConfirmationRequest;
};

/** Schema - MeterDataManagement */
interface _CurrentRetailerConfirmationResponse extends BaseType {
  version?: r9;
  CSVCurrentRetailerData: CSVResponseFormat;
}
export interface CurrentRetailerConfirmationResponse
  extends _CurrentRetailerConfirmationResponse {
  constructor: { new (): CurrentRetailerConfirmationResponse };
}
export var CurrentRetailerConfirmationResponse: {
  new (): CurrentRetailerConfirmationResponse;
};

/** MSATS Data Model Column - CurrentTransformerAccuracyClass */
export type CurrentTransformerAccuracyClass = string;
type _CurrentTransformerAccuracyClass = Primitive._string;

/** MSATS Data Model Column - CurrentTransformerLocation */
export type CurrentTransformerLocation = string;
type _CurrentTransformerLocation = Primitive._string;

/** MSATS Data Model Column - CurrentTransformerRatioAvailable */
export type CurrentTransformerRatioAvailable = string;
type _CurrentTransformerRatioAvailable = Primitive._string;

/** MSATS Data Model Column - CurrentTransformerRatioConnected */
export type CurrentTransformerRatioConnected = string;
type _CurrentTransformerRatioConnected = Primitive._string;

/** MSATS Data Model Column - CurrentTransformerType */
export type CurrentTransformerType = string;
type _CurrentTransformerType = Primitive._string;

/** Schema - Gas */
export type CustomerCharacterisation =
  | "Metropolitan Business"
  | "Metropolitan Residential"
  | "Non Metropolitan Business"
  | "Non Metropolitan Residential";
interface _CustomerCharacterisation extends Primitive._string {
  content: CustomerCharacterisation;
}

/** Classification of customer type, value assigned by FRMP.Examples might include 'BUS' or 'RES'. This is not related to the CustomerType defined on the Service Order. */
export type CustomerClassificationCode = string;
type _CustomerClassificationCode = Primitive._string;

interface _CustomerData extends BaseType {
  ConcessionCard?: ConcessionCard;
  CustomerDetail?: CustomerDetail;
  LastModifiedDateTime: Date;
  MovementType: MovementType;
  NMI: NMI;
  SensitiveLoad: SensitiveLoadType;
}
export interface CustomerData extends _CustomerData {
  constructor: { new (): CustomerData };
}
export var CustomerData: { new (): CustomerData };

/** Purpose - Defines the customer details for notification */
interface _CustomerDetail extends BaseType {
  BusinessName: BusinessName;
  ContactName?: PersonName[];
  EmailAddress?: string[];
  PersonName: PersonName;
  PhoneNumber?: AustralianPhoneNumber[];
  PostalAddress?: Address;
}
export interface CustomerDetail extends _CustomerDetail {
  constructor: { new (): CustomerDetail };
}
export var CustomerDetail: { new (): CustomerDetail };

/** NEM - B2B Electricity - Fully XML tagged; Transaction Group: CUST; Purpose: Notify change of Customer Details- National Electricity B2B Process - Tranche 1 Build Pack; VicGas - CSV only; */
interface _CustomerDetailsNotification extends BaseType {
  version?: r36;
  CSVCustomer: CSVRequestFormat;
  Customer: CustomerData;
}
export interface CustomerDetailsNotification
  extends _CustomerDetailsNotification {
  constructor: { new (): CustomerDetailsNotification };
}
export var CustomerDetailsNotification: { new (): CustomerDetailsNotification };

/** NEM - B2B Electricity: Transaction Group:  CUST; Purpose: Request Customer Details- National Electricity B2B Process - Tranche 1 Build Pack; VicGas:  Not Used. */
interface _CustomerDetailsRequest extends BaseType {
  version?: r32;
  Comments?: SpecialComments;
  NMI: NMI;
  Reason: RequestReason;
}
export interface CustomerDetailsRequest extends _CustomerDetailsRequest {
  constructor: { new (): CustomerDetailsRequest };
}
export var CustomerDetailsRequest: { new (): CustomerDetailsRequest };

/** Identifies that the customer has funded the purchase of the meter.  This leads to a reduction in the meter charges allocated to the incumbent retailer, and so is needed for the network bill reconciliation. This also has an impact on contracts that can be offered to customers by prospective retailers. */
export type CustomerFundedMeter = boolean;
type _CustomerFundedMeter = Primitive._boolean;

/** Purpose - Used to clearly indicate the method by which the notice of interruption to the customer is to be delivered.
 * Version 1.0 additions
 * - Post
 * - Email
 * - SMS
 * - Waiver
 * - Phone */
export type CustomerNotificationMethod =
  | "Post"
  | "Email"
  | "SMS"
  | "Waiver"
  | "Phone";
interface _CustomerNotificationMethod extends Primitive._string {
  content: CustomerNotificationMethod;
}

/** Total number of customers affected per fault */
interface _CustomersAffected extends BaseType {
  lifeSupport: number;
  sensitiveLoad: number;
  total: number;
}
export interface CustomersAffected extends _CustomersAffected {
  constructor: { new (): CustomersAffected };
}
export var CustomersAffected: { new (): CustomersAffected };

/** Classification of customer consumption threshold, value assigned by DNSP. Examples might include 'LOW', 'MED', 'HIGH'. */
export type CustomerThresholdCode = string;
type _CustomerThresholdCode = Primitive._string;

/** Purpose - Defines a list of valid customer types */
export type CustomerType =
  | "Industrial"
  | "Commercial"
  | "Residential"
  | "Farm"
  | "Lighting"
  | "NCONUML";
interface _CustomerType extends Primitive._string {
  content: CustomerType;
}

/** Notification of Daily Imbalance */
interface _DailyImbalanceNotification extends BaseType {
  version?: r34;
  DailyImbalanceData: DailyImbalanceNotificationDailyImbalanceDataType[];
}
export interface DailyImbalanceNotification
  extends _DailyImbalanceNotification {
  constructor: { new (): DailyImbalanceNotification };
}
export var DailyImbalanceNotification: { new (): DailyImbalanceNotification };

interface _DailyImbalanceNotificationDailyImbalanceDataType extends BaseType {
  gasDate: Date;
  networkID: string;
  participantID: string;
  DailyImbalance: number;
}
interface DailyImbalanceNotificationDailyImbalanceDataType
  extends _DailyImbalanceNotificationDailyImbalanceDataType {
  constructor: { new (): DailyImbalanceNotificationDailyImbalanceDataType };
}

/** Schema - Gas */
export type DataChangeReasonCode =
  | "DCR001"
  | "DCR002"
  | "DCR003"
  | "DCR004"
  | "DCR005"
  | "DCR006"
  | "DCR007"
  | "DCR008";
interface _DataChangeReasonCode extends Primitive._string {
  content: DataChangeReasonCode;
}

/** Purpose - Identify data stream type
 * MSATS Data Model Column - DataStreamType */
export type DataStreamType = string;
type _DataStreamType = Primitive._string;

/** Purpose - Identify a genericParameterType */
interface _DateParameter extends _ReportParameterType {
  Description?: string;
  Value: Date;
}
export interface DateParameter extends _DateParameter {
  constructor: { new (): DateParameter };
}
export var DateParameter: { new (): DateParameter };

/** Purpose - Parameters for a CATS Security Report
 * Report Name - C8 */
interface _DateRangeReportParameters extends _BaseReportParameters {
  version?: r20;
  FromDate: Date;
  ToDate: Date;
}
export interface DateRangeReportParameters extends _DateRangeReportParameters {
  constructor: { new (): DateRangeReportParameters };
}
export var DateRangeReportParameters: { new (): DateRangeReportParameters };

/** Purpose - Identify a genericParameterType */
interface _DateTimeParameter extends _ReportParameterType {
  Value: Date;
}
export interface DateTimeParameter extends _DateTimeParameter {
  constructor: { new (): DateTimeParameter };
}
export var DateTimeParameter: { new (): DateTimeParameter };

/** Purpose - Identify a genericParameterType */
interface _DecimalParameter extends _ReportParameterType {
  Description?: string;
  Value: number;
}
export interface DecimalParameter extends _DecimalParameter {
  constructor: { new (): DecimalParameter };
}
export var DecimalParameter: { new (): DecimalParameter };

/** Purpose - Define the fixed Reasons used to request De-energisation
 * Version 1.0 additions
 * - Customer Requested
 * - Move Out
 * - Non-Payment (DNP)
 * - Unauthorised Usage (DNI)
 * - Illegal Usage
 * - No Access
 * - Safety
 * - Defect
 * - Site Works
 * - Breach of Contract
 * - Other */
export type DeEnergisationReason =
  | "Customer Requested"
  | "Move Out"
  | "Non-Payment (DNP)"
  | "Unauthorised Usage (DNI)"
  | "Illegal Usage"
  | "No Access"
  | "Safety"
  | "Defect"
  | "Site Works"
  | "Breach of Contract"
  | "Other";
interface _DeEnergisationReason extends Primitive._string {
  content: DeEnergisationReason;
}

/** Purpose - A deposited plan (DP) number corresponds to an image that defines the legal boundaries of a plot of land in NSW and ACT */
export type DepositedPlanNumber = string;
type _DepositedPlanNumber = Primitive._string;

/** Generic Type for descriptions */
export type Description = string;
type _Description = Primitive._string;

/** Indicates the network device location
 * Version 1.0 additions
 * - Before Meter
 * - After Meter */
export type DeviceLocation = "Before Meter" | "After Meter";
interface _DeviceLocation extends Primitive._string {
  content: DeviceLocation;
}

export type DeviceSerialNumber = string;
type _DeviceSerialNumber = Primitive._string;

/** This element may be handled using NetworkTariffCode, If so, the corresponding data element is to be removed. */
export type DirectionIndicator = "Import" | "Export";
interface _DirectionIndicator extends Primitive._string {
  content: DirectionIndicator;
}

/** In WA readings are collected from some customers by means of self-reader cards that have blank dials printed on them mimicking the layout of the meter display.  This attribute defines the type of display on the meter and is used to define what style of self read card would be sent to the end-use customer when a retailer request them to be on a self read card arrangement.  This also helps define the type of screen to display for internet captured readings. */
export type DisplayType = string;
type _DisplayType = Primitive._string;

/** Purpose - Network charge record type - "912" - Dispute Footer */
interface _DisputeFooter extends BaseType {
  RecordCount: number;
  TotalExclGST?: number;
  TotalInclGST?: number;
}
export interface DisputeFooter extends _DisputeFooter {
  constructor: { new (): DisputeFooter };
}
export var DisputeFooter: { new (): DisputeFooter };

/** Purpose - Network charge record type - "911" - Dispute Item */
interface _DisputeItem extends BaseType {
  status?: DisputeStatusCode;
  Charge?: number;
  Code?: DisputeReasonCode;
  Comment?: SpecialComments;
  GST?: GSTData;
  InvoiceNumber: string;
  NMI: NMIWithChecksum;
  TransactionID: string;
}
export interface DisputeItem extends _DisputeItem {
  constructor: { new (): DisputeItem };
}
export var DisputeItem: { new (): DisputeItem };

/** Application - Network Billing
 * TransactionExchange -
 * TransactionGroup - NETB
 * Priority - Medium
 * Purpose - Submit dispute items to the Distributor
 * NEM
 * B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * B2B_NB_SA_IP_v1-0_-_Effective_13Apr2003.doc
 * B2B_NB_Vic_IP_v1-1_-_Effective_13Jan2002.doc
 * This complex type defines the transaction "NBDISPUTES"
 * Optionally, disputed payment data may be provided for each line item for this transaction as per B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * This transaction is for use only in SA, NSW and VIC. */
interface _DisputeNotification extends BaseType {
  version?: r11;
  CSVDispute: CSVRequestFormat;
  DisputeData: DisputeNotificationData;
}
export interface DisputeNotification extends _DisputeNotification {
  constructor: { new (): DisputeNotification };
}
export var DisputeNotification: { new (): DisputeNotification };

interface _DisputeNotificationData extends BaseType {
  DisputeItems: DisputeNotificationDataDisputeItemsType;
  DisputeSummary: DisputeFooter;
  Header: NETBHeader;
}
export interface DisputeNotificationData extends _DisputeNotificationData {
  constructor: { new (): DisputeNotificationData };
}
export var DisputeNotificationData: { new (): DisputeNotificationData };

interface _DisputeNotificationDataDisputeItemsType extends BaseType {
  DisputeItem: DisputeItem[];
}
interface DisputeNotificationDataDisputeItemsType
  extends _DisputeNotificationDataDisputeItemsType {
  constructor: { new (): DisputeNotificationDataDisputeItemsType };
}

/** Purpose - Define Dispute reason codes.
 * This is a combination of Gas and NEM.
 * Do we need a separate list for each jurisdiction? */
export type DisputeReasonCode =
  | "BPDF"
  | "CDFG"
  | "CDFO"
  | "CDFP"
  | "CDFS"
  | "DUPL"
  | "ESDF"
  | "ESDP"
  | "GPDF"
  | "INTP"
  | "LRTB"
  | "LRTD"
  | "LUKN"
  | "NDFG"
  | "NDFO"
  | "NDFP"
  | "NDFS"
  | "NNMI"
  | "ODIF"
  | "OTHR"
  | "PDIF"
  | "QDFG"
  | "QNTY"
  | "RATE"
  | "SCDF"
  | "SDIF"
  | "TARF";
interface _DisputeReasonCode extends Primitive._string {
  content: DisputeReasonCode;
}

/** Application - Network Billing
 * TransactionExchange -
 * TransactionGroup - NETB
 * Priority - Medium
 * Purpose - Submit dispute resolution details to the Retailer
 *
 * NEM
 * B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * B2B_NB_SA_IP_v1-0_-_Effective_13Apr2003.doc
 * B2B_NB_Vic_IP_Disputes_v1-2_-_Effective_13Jan2002 .doc
 * This complex type defines the transaction "NBDISRESOL"
 * This transaction is for use only in SA, NSW and VIC. */
interface _DisputeResponse extends BaseType {
  version?: r11;
  Confirmations: DisputeResponseConfirmationsType;
  CSVDisputeResponse: CSVRequestFormat;
  DisputeStatus: DisputeStatusData;
}
export interface DisputeResponse extends _DisputeResponse {
  constructor: { new (): DisputeResponse };
}
export var DisputeResponse: { new (): DisputeResponse };

interface _DisputeResponseConfirmationsType extends BaseType {
  Confirmation: Confirmation[];
}
interface DisputeResponseConfirmationsType
  extends _DisputeResponseConfirmationsType {
  constructor: { new (): DisputeResponseConfirmationsType };
}

/** Purpose - Define the adjustment action type. */
export type DisputeStatusCode = "Open" | "Cancelled" | "Closed";
interface _DisputeStatusCode extends Primitive._string {
  content: DisputeStatusCode;
}

interface _DisputeStatusData extends BaseType {
  DisputeItems: DisputeStatusDataDisputeItemsType;
  Header: NETBHeader;
  RecordCount: number;
}
export interface DisputeStatusData extends _DisputeStatusData {
  constructor: { new (): DisputeStatusData };
}
export var DisputeStatusData: { new (): DisputeStatusData };

interface _DisputeStatusDataDisputeItemsType extends BaseType {
  DisputeItem: DisputeItem[];
}
interface DisputeStatusDataDisputeItemsType
  extends _DisputeStatusDataDisputeItemsType {
  constructor: { new (): DisputeStatusDataDisputeItemsType };
}

/** For a number of network tariffs (generally larger customers), the distance to the zone substation is a factor in the calculation of the network access charges. */
export type DistanceFromSubstation = number;
type _DistanceFromSubstation = Primitive._number;

export type DistanceType = number;
type _DistanceType = Primitive._number;

/** Purpose - Identify a distribution loss factor value
 * MSATS Data Model Column - DLFCode
 * Detail - Whilst the current wholesale market identifies a loss factor value for each NMI, the number of NMIs in the retail market make this approach unwieldy. Multiple NMIs will have identical loss factors, and hence the need for a code to identify each value. */
export type DistributionLossFactorCode = string;
type _DistributionLossFactorCode = Primitive._string;

/** Purpose - Row of the DistributionLossFactorCodes table
 * MSATS Data Model Table - CATS_DLF_Codes
 * Replication Table Name - DistributionLossFactorCodes */
interface _DistributionLossFactorCodeRow extends _ReplicationDateRangeRow {
  version?: r9;
  Code: string;
  Description: string;
  Jurisdiction: string;
  Value: number;
}
export interface DistributionLossFactorCodeRow
  extends _DistributionLossFactorCodeRow {
  constructor: { new (): DistributionLossFactorCodeRow };
}
export var DistributionLossFactorCodeRow: {
  new (): DistributionLossFactorCodeRow;
};

/** Purpose - Describe a distribution loss factor code
 * MSATS Data Model Column - DLFDesc
 * Detail - The description is intended to assist in identification of the correct loss factor. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type DistributionLossFactorDescription = string;
type _DistributionLossFactorDescription = Primitive._string;

/** Purpose - Holds the actual value associated with a distribution loss factor code
 * MSATS Data Model Column - DLFValue */
export type DistributionLossFactorValue = number;
type _DistributionLossFactorValue = Primitive._number;

/** Schema - Gas */
export type DistributionTariff =
  | "Demand"
  | "Volume"
  | "1A1R"
  | "1A2R"
  | "1B1R"
  | "1B2R"
  | "1B3R"
  | "1A1N"
  | "1A2N"
  | "1B1N"
  | "1B2N"
  | "1B3N"
  | "1D1R"
  | "1D2R"
  | "1D3R"
  | "1D1N"
  | "1D2N"
  | "1D3N"
  | "1K1R"
  | "1K2R"
  | "1K3R"
  | "1K1N"
  | "1K2N"
  | "1K3N"
  | "1V1R"
  | "1V2R"
  | "1V3R"
  | "1V1N"
  | "1V2N"
  | "1V3N"
  | "1Demand"
  | "2Demand"
  | "3Demand"
  | "4Demand"
  | "5Demand"
  | "6Demand"
  | "7Demand"
  | "8Demand"
  | "9Demand"
  | "0Demand"
  | "Commercial"
  | "Negotiated"
  | "NegotiatedVolume";
interface _DistributionTariff extends Primitive._string {
  content: DistributionTariff;
}

interface _DocumentReferenceType extends BaseType {
  FormNumber?: string;
  FormReference?: string;
}
export interface DocumentReferenceType extends _DocumentReferenceType {
  constructor: { new (): DocumentReferenceType };
}
export var DocumentReferenceType: { new (): DocumentReferenceType };

type DocumentReferenceTypeFormNumberType = string;
type _DocumentReferenceTypeFormNumberType = Primitive._string;

type DocumentReferenceTypeFormReferenceType = string;
type _DocumentReferenceTypeFormReferenceType = Primitive._string;

/** Id for windfarm */
export type Duid = string;
type _Duid = Primitive._string;

export type Duration = string;
type _Duration = Primitive._string;

/** Schema - Elec */
export type ElecIndexInvestigationCode =
  | "Confirm Reading For Vacant Site"
  | "Confirm Zero Consumption"
  | "Incomplete Data"
  | "Invalid MDFF Data"
  | "Invalid Standing Data"
  | "Missing Datastream"
  | "Require Actual Reading or Substitute"
  | "Require Final Substitute"
  | "Scheduled Reading Required"
  | "Service Order Reading Required"
  | "Verify High Reading"
  | "Verify Low Reading"
  | "Other"
  | "Verify/Missing Register"
  | "Require Estimate Data"
  | "Meter Churn";
interface _ElecIndexInvestigationCode extends Primitive._string {
  content: ElecIndexInvestigationCode;
}

/** Purpose - Row of the Electricity CATSChange Request NMI Data Stream table
 * MSATS Data Model Table - CATS_Inbound_Streams
 * Replication Table Name - ElectricityCATSChangeRequestNMIDataStreams */
interface _ElectricityCATSChangeRequestNMIDataStreamRow
  extends _ReplicationBaseRow {
  version?: r31;
  AveragedDailyLoad?: number;
  DataStreamType?: string;
  ProfileName?: string;
  RequestID: number;
  Status?: string;
  Suffix: string;
}
export interface ElectricityCATSChangeRequestNMIDataStreamRow
  extends _ElectricityCATSChangeRequestNMIDataStreamRow {
  constructor: { new (): ElectricityCATSChangeRequestNMIDataStreamRow };
}
export var ElectricityCATSChangeRequestNMIDataStreamRow: {
  new (): ElectricityCATSChangeRequestNMIDataStreamRow;
};

/** Purpose - Row of the Electricity CATS Change Request NMI Master Standing Data table
 * MSATS Data Model Table - CATS_Inbound_NMI_Data
 * Replication Table Name - ElectricityCATSChangeRequestNMIMaster */
interface _ElectricityCATSChangeRequestNMIMasterRow
  extends _ReplicationBaseRow {
  version?: r43;
  AccessDetails?: string;
  Address?: AustralianPartialAddress;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  Aggregate?: YesNo;
  BuildingOrPropertyName?: string;
  BuildingOrPropertyName2?: string;
  ChildEmbeddedNetworkIdentifier?: string;
  ConnectionConfiguration?: string;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  DeliveryPointIdentifier?: number;
  DistanceFromSubstation?: number;
  DistributionLossFactorCode?: string;
  DPNumber?: string;
  FeederClass?: string;
  FlatOrUnitNumber?: string;
  FlatOrUnitType?: AustralianFlatOrUnitType;
  FloorOrLevelNumber?: string;
  FloorOrLevelType?: AustralianFloorOrLevelType;
  GNAFPID?: string;
  HouseNumber?: number;
  HouseNumber2?: number;
  HouseNumber2Suffix?: string;
  HouseNumberSuffix?: string;
  HouseNumberTo?: number;
  HouseNumberToSuffix?: string;
  JurisdictionCode?: string;
  LastConsumerChangeDate?: Date;
  LocationDescriptor?: string;
  LotNumber?: string;
  MeterMalfunctionExemptionExpiryDate?: Date;
  MeterMalfunctionExemptionNumber?: string;
  NMIClassificationCode?: string;
  ParentEmbeddedNetworkIdentifier?: string;
  PoleNumber?: string;
  PostCode?: string;
  RequestID: number;
  SectionNumber?: string;
  SharedIsolationPointFlag?: string;
  StateOrTerritory?: AustralianStateOrTerritory;
  Status?: string;
  StreetName?: string;
  StreetSuffix?: AustralianStreetSuffix;
  StreetType?: AustralianStreetType;
  SuburbOrPlaceOrLocality?: string;
  TransmissionNodeIdentifier?: string;
  TransmissionNodeIdentifier2?: string;
  VoltageType?: string;
}
export interface ElectricityCATSChangeRequestNMIMasterRow
  extends _ElectricityCATSChangeRequestNMIMasterRow {
  constructor: { new (): ElectricityCATSChangeRequestNMIMasterRow };
}
export var ElectricityCATSChangeRequestNMIMasterRow: {
  new (): ElectricityCATSChangeRequestNMIMasterRow;
};

/** Purpose - Row of the Electricity CATS Change Request NMI Meter Register Configuration  table
 * MSATS Data Model Table - CATS_Inbound_REGISTER_IDENTIFIER
 * Replication Table Name - ElectricityCATSChangeRequestNMIMeterRegisters */
interface _ElectricityCATSChangeRequestNMIMeterRegisterRow
  extends _ReplicationBaseRow {
  version?: r29;
  ConsumptionType?: MeterConsumptionType;
  ControlledLoad?: string;
  Demand1?: number;
  Demand2?: number;
  DialFormat?: number;
  Multiplier?: number;
  NetworkAdditionalInformation?: string;
  NetworkTariffCode?: string;
  RegisterID: string;
  RequestID: number;
  SerialNumber: string;
  Status?: MeterRegisterStatusCode;
  Suffix?: string;
  TimeOfDay?: string;
  UnitOfMeasure?: string;
}
export interface ElectricityCATSChangeRequestNMIMeterRegisterRow
  extends _ElectricityCATSChangeRequestNMIMeterRegisterRow {
  constructor: { new (): ElectricityCATSChangeRequestNMIMeterRegisterRow };
}
export var ElectricityCATSChangeRequestNMIMeterRegisterRow: {
  new (): ElectricityCATSChangeRequestNMIMeterRegisterRow;
};

/** Purpose - Row of the Electricity CATS Change Request NMI Meter Register table
 * MSATS Data Model Table - CATS_Inbound_Meter_Register
 * Replication Table Name - ElectricityCATSChangeRequestNMIMeters */
interface _ElectricityCATSChangeRequestNMIMeterRow extends _ReplicationBaseRow {
  version?: r42;
  AdditionalSiteInformation?: string;
  AssetManagementPlan?: string;
  CalibrationTables?: string;
  CommunicationsEquipmentType?: string;
  CommunicationsProtocol?: string;
  Constant?: string;
  CurrentTransformerAccuracyClass?: string;
  CurrentTransformerLocation?: string;
  CurrentTransformerRatioAvailable?: string;
  CurrentTransformerRatioConnected?: string;
  CurrentTransformerTest?: string;
  CurrentTransformerTestDate?: Date;
  CurrentTransformerType?: string;
  CustomerFundedMeter?: boolean;
  DataConversion?: string;
  DataValidations?: string;
  EstimationInstructions?: string;
  GPSCoordinates?: GeographicCoordinate;
  Hazard?: string;
  InstallationTypeCode?: string;
  KeyCode?: string;
  LastTestDate?: Date;
  Location?: string;
  Manufacturer?: string;
  MeasurementType?: string;
  Model?: string;
  NextScheduledReadDate?: Date;
  NextTestDate?: Date;
  Password?: string;
  Point?: string;
  Program?: string;
  ReadTypeCode?: string;
  RemotePhoneNumber?: string;
  RequestID: number;
  Route?: string;
  SerialNumber: string;
  Status?: string;
  TestCalibrationProgram?: string;
  TestPerformedBy?: string;
  TestResult?: string;
  TestResultAccuracy?: number;
  TestResultNotes?: string;
  TransformerLocation?: string;
  TransformerRatio?: string;
  TransformerType?: string;
  Use?: string;
  UserAccessRights?: string;
  VoltageTransformerAccuracyClass?: string;
  VoltageTransformerLocation?: string;
  VoltageTransformerRatio?: string;
  VoltageTransformerTest?: string;
  VoltageTransformerTestDate?: Date;
  VoltageTransformerType?: string;
}
export interface ElectricityCATSChangeRequestNMIMeterRow
  extends _ElectricityCATSChangeRequestNMIMeterRow {
  constructor: { new (): ElectricityCATSChangeRequestNMIMeterRow };
}
export var ElectricityCATSChangeRequestNMIMeterRow: {
  new (): ElectricityCATSChangeRequestNMIMeterRow;
};

/** Purpose - Row of the Electricity CATS Change Request NMI Role Assignment table
 * MSATS Data Model Table - CATS_Inbound_NMI_Participant_Relations
 * Replication Table Name - ElectricityCATSChangeRequestNMIRoles */
interface _ElectricityCATSChangeRequestNMIRoleRow extends _ReplicationBaseRow {
  Party: PartyIdentifier;
  RequestID: number;
  Role: string;
}
export interface ElectricityCATSChangeRequestNMIRoleRow
  extends _ElectricityCATSChangeRequestNMIRoleRow {
  constructor: { new (): ElectricityCATSChangeRequestNMIRoleRow };
}
export var ElectricityCATSChangeRequestNMIRoleRow: {
  new (): ElectricityCATSChangeRequestNMIRoleRow;
};

/** Purpose - container for electricity data stream information */
interface _ElectricityDataStream extends BaseType {
  AveragedDailyLoad?: number;
  DataStreamType?: string;
  FromDate?: Date;
  ProfileName?: string;
  Status?: string;
  Suffix: string;
  ToDate?: Date;
}
export interface ElectricityDataStream extends _ElectricityDataStream {
  constructor: { new (): ElectricityDataStream };
}
export var ElectricityDataStream: { new (): ElectricityDataStream };

/** Purpose - container for information relating to multiple electricity data streams associated with a NMI */
interface _ElectricityDataStreams extends BaseType {
  DataStream: ElectricityDataStream[];
}
export interface ElectricityDataStreams extends _ElectricityDataStreams {
  constructor: { new (): ElectricityDataStreams };
}
export var ElectricityDataStreams: { new (): ElectricityDataStreams };

interface _ElectricityHSMDataInventoryRequestData
  extends _HSMDataInventoryRequestData {
  allMonitors: boolean;
  dataCategory: HSMData;
  version?: r26;
  EndTime: Date;
  MonitorIdentities: HSMMonitorIdentities;
  StartTime: Date;
}
export interface ElectricityHSMDataInventoryRequestData
  extends _ElectricityHSMDataInventoryRequestData {
  constructor: { new (): ElectricityHSMDataInventoryRequestData };
}
export var ElectricityHSMDataInventoryRequestData: {
  new (): ElectricityHSMDataInventoryRequestData;
};

interface _ElectricityHSMDataInventoryResponseData
  extends _HSMDataInventoryResponseData {
  version?: r26;
  TriggeredEvents: HSMTriggeredEvents;
}
export interface ElectricityHSMDataInventoryResponseData
  extends _ElectricityHSMDataInventoryResponseData {
  constructor: { new (): ElectricityHSMDataInventoryResponseData };
}
export var ElectricityHSMDataInventoryResponseData: {
  new (): ElectricityHSMDataInventoryResponseData;
};

interface _ElectricityHSMMonitorDataRequestData
  extends _HSMMonitorDataRequestData {
  version?: r26;
  Continuous: ElectricityHSMMonitorDataRequestDataContinuousType;
  MonitorIdentity: HSMMonitorIdentity;
  Triggered: ElectricityHSMMonitorDataRequestDataTriggeredType;
}
export interface ElectricityHSMMonitorDataRequestData
  extends _ElectricityHSMMonitorDataRequestData {
  constructor: { new (): ElectricityHSMMonitorDataRequestData };
}
export var ElectricityHSMMonitorDataRequestData: {
  new (): ElectricityHSMMonitorDataRequestData;
};

interface _ElectricityHSMMonitorDataRequestDataContinuousType extends BaseType {
  endTime: Date;
  startTime: Date;
}
interface ElectricityHSMMonitorDataRequestDataContinuousType
  extends _ElectricityHSMMonitorDataRequestDataContinuousType {
  constructor: { new (): ElectricityHSMMonitorDataRequestDataContinuousType };
}

interface _ElectricityHSMMonitorDataRequestDataTriggeredType extends BaseType {
  faultTime: Date;
  BlockNumber: number[];
}
interface ElectricityHSMMonitorDataRequestDataTriggeredType
  extends _ElectricityHSMMonitorDataRequestDataTriggeredType {
  constructor: { new (): ElectricityHSMMonitorDataRequestDataTriggeredType };
}

interface _ElectricityHSMMonitorDataResponseData
  extends _HSMMonitorDataResponseData {
  version?: r26;
  ContinuousData: HSMContinuousMonitorData;
  TriggeredData: HSMTriggeredMonitorData;
}
export interface ElectricityHSMMonitorDataResponseData
  extends _ElectricityHSMMonitorDataResponseData {
  constructor: { new (): ElectricityHSMMonitorDataResponseData };
}
export var ElectricityHSMMonitorDataResponseData: {
  new (): ElectricityHSMMonitorDataResponseData;
};

interface _ElectricityHSMMonitorsRequestData extends _HSMMonitorsRequestData {
  allMonitors: boolean;
  requestName: HSMMonitors;
  version?: r26;
  MonitorIdentities: HSMMonitorIdentities;
}
export interface ElectricityHSMMonitorsRequestData
  extends _ElectricityHSMMonitorsRequestData {
  constructor: { new (): ElectricityHSMMonitorsRequestData };
}
export var ElectricityHSMMonitorsRequestData: {
  new (): ElectricityHSMMonitorsRequestData;
};

interface _ElectricityHSMMonitorsResponseData extends _HSMMonitorsResponseData {
  responseName: HSMMonitors;
  version?: r26;
  MonitorCapabilities: HSMMonitorCapabilities;
  MonitorRollCalls: HSMMonitorRollCalls;
}
export interface ElectricityHSMMonitorsResponseData
  extends _ElectricityHSMMonitorsResponseData {
  constructor: { new (): ElectricityHSMMonitorsResponseData };
}
export var ElectricityHSMMonitorsResponseData: {
  new (): ElectricityHSMMonitorsResponseData;
};

interface _ElectricityHSMTriggersRequestData extends _HSMTriggersRequestData {
  allMonitors: boolean;
  version?: r26;
  MonitorIdentities: HSMMonitorIdentities;
}
export interface ElectricityHSMTriggersRequestData
  extends _ElectricityHSMTriggersRequestData {
  constructor: { new (): ElectricityHSMTriggersRequestData };
}
export var ElectricityHSMTriggersRequestData: {
  new (): ElectricityHSMTriggersRequestData;
};

interface _ElectricityHSMTriggersResponseData extends _HSMTriggersResponseData {
  version?: r26;
  Triggers: HSMTriggers;
}
export interface ElectricityHSMTriggersResponseData
  extends _ElectricityHSMTriggersResponseData {
  constructor: { new (): ElectricityHSMTriggersResponseData };
}
export var ElectricityHSMTriggersResponseData: {
  new (): ElectricityHSMTriggersResponseData;
};

/** Purpose - container for non-repeating standing data associated with an electricity NMI */
interface _ElectricityMasterStandingData extends BaseType {
  AccessDetails?: string;
  Address?: AustralianPartialAddress;
  Aggregate?: YesNo;
  ChildEmbeddedNetworkIdentifier?: string;
  ConnectionConfiguration?: string;
  ControlEquipments?: ControlEquipments;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  DistanceFromSubstation?: number;
  DistributionLossFactorCode?: string;
  EnergisationStatus?: EnergisationStatus;
  FeederClass?: string;
  FromDate?: Date;
  JurisdictionCode?: string;
  LastConsumerChangeDate?: Date;
  MeterMalfunctionExemptionExpiryDate?: Date;
  MeterMalfunctionExemptionNumber?: string;
  NetworkDevices?: NetworkDevices;
  NMIClassificationCode?: string;
  ParentEmbeddedNetworkIdentifier?: string;
  PoleNumber?: string;
  PrimaryVoltage?: PrimaryVoltage;
  SharedIsolationPointFlag?: string;
  Status?: string;
  ToDate?: Date;
  TransmissionNodeIdentifier?: string;
  TransmissionNodeIdentifier2?: string;
  VoltageType?: string;
}
export interface ElectricityMasterStandingData
  extends _ElectricityMasterStandingData {
  constructor: { new (): ElectricityMasterStandingData };
}
export var ElectricityMasterStandingData: {
  new (): ElectricityMasterStandingData;
};

/** Purpose - container for electricity meter information */
interface _ElectricityMeter extends BaseType {
  AdditionalSiteInformation?: string;
  AssetManagementPlan?: string;
  CalibrationTables?: string;
  CommunicationsEquipmentType?: string;
  CommunicationsProtocol?: string;
  Constant?: string;
  ControlEquipments?: ControlEquipments;
  CurrentTransformerAccuracyClass?: string;
  CurrentTransformerLocation?: string;
  CurrentTransformerRatioAvailable?: string;
  CurrentTransformerRatioConnected?: string;
  CurrentTransformerTest?: string;
  CurrentTransformerTestDate?: Date;
  CurrentTransformerType?: string;
  CustomerFundedMeter?: boolean;
  DataConversion?: string;
  DataValidations?: string;
  DisplayType?: string;
  EstimationInstructions?: string;
  FromDate?: Date;
  GeneralSupply?: YesNo;
  GenerationType?: GenerationType;
  GPSCoordinates?: GeographicCoordinate;
  Hazard?: string;
  InstallationTypeCode?: string;
  InstrumentTransformers?: InstrumentTransformers;
  KeyCode?: string;
  LastTestDate?: Date;
  Location?: string;
  Manufacturer?: string;
  MeasurementType?: string;
  Model?: string;
  NextScheduledReadDate?: Date;
  NextTestDate?: Date;
  Password?: string;
  Point?: string;
  Program?: string;
  ReadTypeCode?: string;
  RegisterConfiguration?: ElectricityMeterRegisterConfiguration;
  RemotePhoneNumber?: string;
  Route?: string;
  SerialNumber?: string;
  Status?: MeterStatusCode;
  SupplyPhase?: SupplyPhase;
  TestCalibrationProgram?: string;
  TestPerformedBy?: string;
  TestResult?: string;
  TestResultAccuracy?: number;
  TestResultNotes?: string;
  ToDate?: Date;
  TransformerLocation?: string;
  TransformerRatio?: string;
  TransformerType?: string;
  Use?: string;
  UserAccessRights?: string;
  VoltageTransformerAccuracyClass?: string;
  VoltageTransformerLocation?: string;
  VoltageTransformerRatio?: string;
  VoltageTransformerTest?: string;
  VoltageTransformerTestDate?: Date;
  VoltageTransformerType?: string;
}
export interface ElectricityMeter extends _ElectricityMeter {
  constructor: { new (): ElectricityMeter };
}
export var ElectricityMeter: { new (): ElectricityMeter };

interface _ElectricityMeterReadData extends BaseType {
  Consumption: number;
  Read: string;
  ReadDate: Date;
}
export interface ElectricityMeterReadData extends _ElectricityMeterReadData {
  constructor: { new (): ElectricityMeterReadData };
}
export var ElectricityMeterReadData: { new (): ElectricityMeterReadData };

type ElectricityMeterReadDataConsumptionType = number;
type _ElectricityMeterReadDataConsumptionType = Primitive._number;

type ElectricityMeterReadDataReadType = string;
type _ElectricityMeterReadDataReadType = Primitive._string;

/** Purpose - container for information relating to multiple electricity meter registers associated with a meter */
interface _ElectricityMeterRegisterConfiguration extends BaseType {
  Register: ElectricityMeterRegisterDetail[];
}
export interface ElectricityMeterRegisterConfiguration
  extends _ElectricityMeterRegisterConfiguration {
  constructor: { new (): ElectricityMeterRegisterConfiguration };
}
export var ElectricityMeterRegisterConfiguration: {
  new (): ElectricityMeterRegisterConfiguration;
};

/** Purpose - container for information about a register within an electricity meter */
interface _ElectricityMeterRegisterDetail extends BaseType {
  ConsumptionType?: MeterConsumptionType;
  ControlledLoad?: string;
  Demand1?: number;
  Demand2?: number;
  DialFormat?: number;
  DirectionIndicator?: DirectionIndicator;
  FromDate?: Date;
  HighLowConsumption?: HighLowConsumption;
  Multiplier?: number;
  NetworkAdditionalInformation?: string;
  NetworkTariffCode?: string;
  PreviousReading?: ElectricityMeterReadData;
  RegisterID?: string;
  RegisterIndexValue?: string;
  Status?: MeterRegisterStatusCode;
  Suffix?: string;
  TimeOfDay?: string;
  ToDate?: Date;
  UnitOfMeasure?: string;
}
export interface ElectricityMeterRegisterDetail
  extends _ElectricityMeterRegisterDetail {
  constructor: { new (): ElectricityMeterRegisterDetail };
}
export var ElectricityMeterRegisterDetail: {
  new (): ElectricityMeterRegisterDetail;
};

/** Purpose - container for information relating to multiple electricity meters associated with a NMI */
interface _ElectricityMeters extends BaseType {
  Meter: ElectricityMeter[];
}
export interface ElectricityMeters extends _ElectricityMeters {
  constructor: { new (): ElectricityMeters };
}
export var ElectricityMeters: { new (): ElectricityMeters };

/** Purpose - Row of the Electricity NMI Data Stream table
 * MSATS Data Model Table - CATS_NMI_Data_Stream
 * Replication Table Name - ElectricityNMIDataStreams */
interface _ElectricityNMIDataStreamRow extends _ReplicationDateRangeRow {
  version?: r31;
  AveragedDailyLoad?: number;
  DataStreamType?: string;
  NMI: string;
  ProfileName?: string;
  Status?: string;
  Suffix: string;
}
export interface ElectricityNMIDataStreamRow
  extends _ElectricityNMIDataStreamRow {
  constructor: { new (): ElectricityNMIDataStreamRow };
}
export var ElectricityNMIDataStreamRow: { new (): ElectricityNMIDataStreamRow };

/** Purpose - Row of the Electricity NMI DataStream Standing Data table extended by BDTStatus and Event for Bulk Data Tool */
interface _ElectricityNMIDataStreamRowBDT extends _ReplicationDateRangeRow {
  version?: r31;
  AveragedDailyLoad?: number;
  BDTStatus?: BDTStatus;
  DataStreamType?: string;
  Event?: Event[];
  ProfileName?: string;
  Status?: string;
  Suffix: string;
}
export interface ElectricityNMIDataStreamRowBDT
  extends _ElectricityNMIDataStreamRowBDT {
  constructor: { new (): ElectricityNMIDataStreamRowBDT };
}
export var ElectricityNMIDataStreamRowBDT: {
  new (): ElectricityNMIDataStreamRowBDT;
};

/** Purpose - Row of the Electricity NMI Master Standing Data table
 * MSATS Data Model Table - CATS_NMI_Data
 * Replication Table Name - ElectricityNMIMaster */
interface _ElectricityNMIMasterRow extends _ReplicationDateRangeRow {
  version?: r43;
  AccessDetails?: string;
  Address?: AustralianPartialAddress;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  Aggregate?: YesNo;
  BuildingOrPropertyName?: string;
  BuildingOrPropertyName2?: string;
  ChildEmbeddedNetworkIdentifier?: string;
  ConnectionConfiguration?: string;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  DeliveryPointIdentifier?: number;
  DistanceFromSubstation?: number;
  DistributionLossFactorCode?: string;
  DPNumber?: string;
  FeederClass?: string;
  FlatOrUnitNumber?: string;
  FlatOrUnitType?: AustralianFlatOrUnitType;
  FloorOrLevelNumber?: string;
  FloorOrLevelType?: AustralianFloorOrLevelType;
  GNAFPID?: string;
  HouseNumber?: number;
  HouseNumber2?: number;
  HouseNumber2Suffix?: string;
  HouseNumberSuffix?: string;
  HouseNumberTo?: number;
  HouseNumberToSuffix?: string;
  JurisdictionCode?: string;
  LastConsumerChangeDate?: Date;
  LocationDescriptor?: string;
  LotNumber?: string;
  MeterMalfunctionExemptionExpiryDate?: Date;
  MeterMalfunctionExemptionNumber?: string;
  NMI: string;
  NMIClassificationCode?: string;
  ParentEmbeddedNetworkIdentifier?: string;
  PoleNumber?: string;
  PostCode?: string;
  SectionNumber?: string;
  SharedIsolationPointFlag?: string;
  StateOrTerritory?: AustralianStateOrTerritory;
  Status?: string;
  StreetName?: string;
  StreetSuffix?: AustralianStreetSuffix;
  StreetType?: AustralianStreetType;
  SuburbOrPlaceOrLocality?: string;
  TransmissionNodeIdentifier?: string;
  TransmissionNodeIdentifier2?: string;
  VoltageType?: string;
}
export interface ElectricityNMIMasterRow extends _ElectricityNMIMasterRow {
  constructor: { new (): ElectricityNMIMasterRow };
}
export var ElectricityNMIMasterRow: { new (): ElectricityNMIMasterRow };

/** Purpose - Row of the Electricity NMI Master Standing Data table extended by BDTStatus and Event for Bulk Data Tool
 * MSATS Data Model Table - CATS_NMI_Data
 * Replication Table Name - ElectricityNMIMaster */
interface _ElectricityNMIMasterRowBDT extends _ReplicationDateRangeRow {
  version?: r43;
  AccessDetails?: string;
  Address?: AustralianPartialAddress;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  Aggregate?: YesNo;
  BDTStatus?: BDTStatus;
  BuildingOrPropertyName?: string;
  BuildingOrPropertyName2?: string;
  ChildEmbeddedNetworkIdentifier?: string;
  ConnectionConfiguration?: string;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  DeliveryPointIdentifier?: number;
  DistanceFromSubstation?: number;
  DistributionLossFactorCode?: string;
  DPNumber?: string;
  Event?: Event[];
  FeederClass?: string;
  FlatOrUnitNumber?: string;
  FlatOrUnitType?: AustralianFlatOrUnitType;
  FloorOrLevelNumber?: string;
  FloorOrLevelType?: AustralianFloorOrLevelType;
  GNAFPID?: string;
  HouseNumber?: number;
  HouseNumber2?: number;
  HouseNumber2Suffix?: string;
  HouseNumberSuffix?: string;
  HouseNumberTo?: number;
  HouseNumberToSuffix?: string;
  JurisdictionCode?: string;
  LastConsumerChangeDate?: Date;
  LocationDescriptor?: string;
  LotNumber?: string;
  MeterMalfunctionExemptionExpiryDate?: Date;
  MeterMalfunctionExemptionNumber?: string;
  NMIClassificationCode?: string;
  ParentEmbeddedNetworkIdentifier?: string;
  PoleNumber?: string;
  PostCode?: string;
  SectionNumber?: string;
  SharedIsolationPointFlag?: string;
  StateOrTerritory?: AustralianStateOrTerritory;
  Status?: string;
  StreetName?: string;
  StreetSuffix?: AustralianStreetSuffix;
  StreetType?: AustralianStreetType;
  SuburbOrPlaceOrLocality?: string;
  TransmissionNodeIdentifier?: string;
  TransmissionNodeIdentifier2?: string;
  VoltageType?: string;
}
export interface ElectricityNMIMasterRowBDT
  extends _ElectricityNMIMasterRowBDT {
  constructor: { new (): ElectricityNMIMasterRowBDT };
}
export var ElectricityNMIMasterRowBDT: { new (): ElectricityNMIMasterRowBDT };

/** Purpose - Row of the Electricity NMI Meter Register Configuration table
 * MSATS Data Model Table - CATS_REGISTER_IDENTIFIER
 * Replication Table Name - ElectricityNMIMeterRegisters */
interface _ElectricityNMIMeterRegisterRow extends _ReplicationDateRangeRow {
  version?: r9;
  ConsumptionType?: MeterConsumptionType;
  ControlledLoad?: string;
  Demand1?: number;
  Demand2?: number;
  DialFormat?: number;
  Multiplier?: number;
  NetworkAdditionalInformation?: string;
  NetworkTariffCode?: string;
  NMI: string;
  RegisterID: string;
  SerialNumber: string;
  Status?: MeterRegisterStatusCode;
  Suffix?: string;
  TimeOfDay?: string;
  UnitOfMeasure?: string;
}
export interface ElectricityNMIMeterRegisterRow
  extends _ElectricityNMIMeterRegisterRow {
  constructor: { new (): ElectricityNMIMeterRegisterRow };
}
export var ElectricityNMIMeterRegisterRow: {
  new (): ElectricityNMIMeterRegisterRow;
};

/** Purpose - Row of the Electricity NMI Meter Register Standing Data table extended by BDTStatus and Event for Bulk Data Tool */
interface _ElectricityNMIMeterRegisterRowBDT extends _ReplicationDateRangeRow {
  version?: r9;
  BDTStatus?: BDTStatus;
  ConsumptionType?: MeterConsumptionType;
  ControlledLoad?: string;
  Demand1?: number;
  Demand2?: number;
  DialFormat?: number;
  Event?: Event[];
  Multiplier?: number;
  NetworkAdditionalInformation?: string;
  NetworkTariffCode?: string;
  RegisterID: string;
  SerialNumber: string;
  Status?: MeterRegisterStatusCode;
  Suffix?: string;
  TimeOfDay?: string;
  UnitOfMeasure?: string;
}
export interface ElectricityNMIMeterRegisterRowBDT
  extends _ElectricityNMIMeterRegisterRowBDT {
  constructor: { new (): ElectricityNMIMeterRegisterRowBDT };
}
export var ElectricityNMIMeterRegisterRowBDT: {
  new (): ElectricityNMIMeterRegisterRowBDT;
};

/** Purpose - Row of the Electricity NMI Meter Register table
 * MSATS Data Model Table - CATS_Meter_Register
 * Replication Table Name - ElectricityNMIMeters */
interface _ElectricityNMIMeterRow extends _ReplicationDateRangeRow {
  version?: r42;
  AdditionalSiteInformation?: string;
  AssetManagementPlan?: string;
  CalibrationTables?: string;
  CommunicationsEquipmentType?: string;
  CommunicationsProtocol?: string;
  Constant?: string;
  CurrentTransformerAccuracyClass?: string;
  CurrentTransformerLocation?: string;
  CurrentTransformerRatioAvailable?: string;
  CurrentTransformerRatioConnected?: string;
  CurrentTransformerTest?: string;
  CurrentTransformerTestDate?: Date;
  CurrentTransformerType?: string;
  CustomerFundedMeter?: boolean;
  DataConversion?: string;
  DataValidations?: string;
  EstimationInstructions?: string;
  GPSCoordinates?: GeographicCoordinate;
  Hazard?: string;
  InstallationTypeCode?: string;
  KeyCode?: string;
  LastTestDate?: Date;
  Location?: string;
  Manufacturer?: string;
  MeasurementType?: string;
  Model?: string;
  NextScheduledReadDate?: Date;
  NextTestDate?: Date;
  NMI: string;
  Password?: string;
  Point?: string;
  Program?: string;
  ReadTypeCode?: string;
  RemotePhoneNumber?: string;
  Route?: string;
  SerialNumber: string;
  Status?: string;
  TestCalibrationProgram?: string;
  TestPerformedBy?: string;
  TestResult?: string;
  TestResultAccuracy?: number;
  TestResultNotes?: string;
  TransformerLocation?: string;
  TransformerRatio?: string;
  TransformerType?: string;
  Use?: string;
  UserAccessRights?: string;
  VoltageTransformerAccuracyClass?: string;
  VoltageTransformerLocation?: string;
  VoltageTransformerRatio?: string;
  VoltageTransformerTest?: string;
  VoltageTransformerTestDate?: Date;
  VoltageTransformerType?: string;
}
export interface ElectricityNMIMeterRow extends _ElectricityNMIMeterRow {
  constructor: { new (): ElectricityNMIMeterRow };
}
export var ElectricityNMIMeterRow: { new (): ElectricityNMIMeterRow };

/** Purpose - Row of the Electricity NMI Meter Standing Data table extended by BDTStatus and Event for Bulk Data Tool */
interface _ElectricityNMIMeterRowBDT extends _ReplicationDateRangeRow {
  version?: r42;
  AdditionalSiteInformation?: string;
  AssetManagementPlan?: string;
  BDTStatus?: BDTStatus;
  CalibrationTables?: string;
  CommunicationsEquipmentType?: string;
  CommunicationsProtocol?: string;
  Constant?: string;
  CurrentTransformerAccuracyClass?: string;
  CurrentTransformerLocation?: string;
  CurrentTransformerRatioAvailable?: string;
  CurrentTransformerRatioConnected?: string;
  CurrentTransformerTest?: string;
  CurrentTransformerTestDate?: Date;
  CurrentTransformerType?: string;
  CustomerFundedMeter?: boolean;
  DataConversion?: string;
  DataValidations?: string;
  EstimationInstructions?: string;
  Event?: Event[];
  GPSCoordinates?: GeographicCoordinate;
  Hazard?: string;
  InstallationTypeCode?: string;
  KeyCode?: string;
  LastTestDate?: Date;
  Location?: string;
  Manufacturer?: string;
  MeasurementType?: string;
  Model?: string;
  NextScheduledReadDate?: Date;
  NextTestDate?: Date;
  Password?: string;
  Point?: string;
  Program?: string;
  ReadTypeCode?: string;
  RemotePhoneNumber?: string;
  Route?: string;
  SerialNumber: string;
  Status?: string;
  TestCalibrationProgram?: string;
  TestPerformedBy?: string;
  TestResult?: string;
  TestResultAccuracy?: number;
  TestResultNotes?: string;
  TransformerLocation?: string;
  TransformerRatio?: string;
  TransformerType?: string;
  Use?: string;
  UserAccessRights?: string;
  VoltageTransformerAccuracyClass?: string;
  VoltageTransformerLocation?: string;
  VoltageTransformerRatio?: string;
  VoltageTransformerTest?: string;
  VoltageTransformerTestDate?: Date;
  VoltageTransformerType?: string;
}
export interface ElectricityNMIMeterRowBDT extends _ElectricityNMIMeterRowBDT {
  constructor: { new (): ElectricityNMIMeterRowBDT };
}
export var ElectricityNMIMeterRowBDT: { new (): ElectricityNMIMeterRowBDT };

/** Purpose - Row of the Electricity NMI Role Assignment table
 * MSATS Data Model Table - CATS_NMI_Participant_Relations
 * Replication Table Name - ElectricityNMIRoles */
interface _ElectricityNMIRoleRow extends _ReplicationDateRangeRow {
  NMI: string;
  Party: PartyIdentifier;
  Role: string;
}
export interface ElectricityNMIRoleRow extends _ElectricityNMIRoleRow {
  constructor: { new (): ElectricityNMIRoleRow };
}
export var ElectricityNMIRoleRow: { new (): ElectricityNMIRoleRow };

/** Purpose - Row of the Electricity NMI Role Standing Data table extended by BDTStatus and Event for Bulk Data Tool */
interface _ElectricityNMIRoleRowBDT extends _ReplicationDateRangeRow {
  version?: r9;
  BDTStatus?: BDTStatus;
  Event?: Event[];
  Party: PartyIdentifier;
  Role: string;
}
export interface ElectricityNMIRoleRowBDT extends _ElectricityNMIRoleRowBDT {
  constructor: { new (): ElectricityNMIRoleRowBDT };
}
export var ElectricityNMIRoleRowBDT: { new (): ElectricityNMIRoleRowBDT };

/** Purpose - used in MeterDataMissingNotification transaction based on NMITransactionBase */
interface _ElectricityProvideMeterRequestData extends _NMITransactionBase {
  version?: r17;
  NMIStandingData: NMIStandingData;
  RequestPeriod: OpenPeriod;
}
export interface ElectricityProvideMeterRequestData
  extends _ElectricityProvideMeterRequestData {
  constructor: { new (): ElectricityProvideMeterRequestData };
}
export var ElectricityProvideMeterRequestData: {
  new (): ElectricityProvideMeterRequestData;
};

/** Purpose - Defines the data type for new connection and meter additions and alterations
 * v36.1.  WL.  Change LifeSupport to be optional field. */
interface _ElectricityServiceOrderDetails extends _ServiceOrderRequestData {
  version?: r41;
  AverageDailyLoad?: number;
  CoOrdinationRequired?: YesNo;
  ConfirmedDeEnergisation?: boolean;
  CustomerConsultationRequired: boolean;
  CustomerType?: CustomerType;
  DeEnergisationReason?: DeEnergisationReason;
  Escalation?: Escalation;
  ExemptionCode?: string;
  InstallationType?: InstallationType;
  License?: License;
  LifeSupport?: YesNo;
  MaximumDemand?: number;
  MeteringType?: string;
  MeterLicense?: License;
  OffPeakRequirements?: SpecialComments;
  PurposeOfRequest?: PurposeOfRequest;
  RegClassification?: RegClassification;
  ServiceTime?: ServiceTimeType;
  SupplyPhase?: SupplyPhase;
  SwitchingServiceRequired?: string;
}
export interface ElectricityServiceOrderDetails
  extends _ElectricityServiceOrderDetails {
  constructor: { new (): ElectricityServiceOrderDetails };
}
export var ElectricityServiceOrderDetails: {
  new (): ElectricityServiceOrderDetails;
};

/** Schema - Electricity */
interface _ElectricityServiceOrderNotificationData
  extends _ServiceOrderNotificationData {
  version?: r36;
  ActualDateTime: Date;
  Product: Product;
  ResponseCode?: SORDResponseCode;
  ServiceOrderStatus: ServiceOrderStatus;
}
export interface ElectricityServiceOrderNotificationData
  extends _ElectricityServiceOrderNotificationData {
  constructor: { new (): ElectricityServiceOrderNotificationData };
}
export var ElectricityServiceOrderNotificationData: {
  new (): ElectricityServiceOrderNotificationData;
};

interface _ElectricityServiceOrderType extends _ServiceOrderTypeBase {
  version?: r36;
  WorkType: ElectricityServiceOrderTypeWorkTypeType;
}
export interface ElectricityServiceOrderType
  extends _ElectricityServiceOrderType {
  constructor: { new (): ElectricityServiceOrderType };
}
export var ElectricityServiceOrderType: { new (): ElectricityServiceOrderType };

interface _ElectricityServiceOrderTypeWorkTypeType extends _ServiceOrderType {
  workSubType?: ServiceOrderSubType;
}
interface ElectricityServiceOrderTypeWorkTypeType
  extends _ElectricityServiceOrderTypeWorkTypeType {
  constructor: { new (): ElectricityServiceOrderTypeWorkTypeType };
}

/** Purpose - Standing data associated with an electricity NMI.
 * Detail - The structure supports multiple data streams, meters and role assignments. Note that because this type is derived from the NMIStandingData type, it begins with the elements defined for that type, notably the NMI. */
interface _ElectricityStandingData extends _NMIStandingData {
  version?: r43;
  DataStreams?: ElectricityDataStreams;
  MasterData?: ElectricityMasterStandingData;
  MeterRegister?: ElectricityMeters;
  RoleAssignments?: RoleAssignments;
}
export interface ElectricityStandingData extends _ElectricityStandingData {
  constructor: { new (): ElectricityStandingData };
}
export var ElectricityStandingData: { new (): ElectricityStandingData };

/** Purpose - Standing data associated with an electricity NMI for BDT.
 * Detail - The structure supports multiple data streams, meters and role assignments. Note that because this type is derived from the NMIStandingData type, it begins with the elements defined for that type, notably the NMI. */
interface _ElectricityStandingDataBDT extends BaseType {
  BDTGroupings: BDTGroupings;
  NMIStandingData: NMIStandingData;
}
export interface ElectricityStandingDataBDT
  extends _ElectricityStandingDataBDT {
  constructor: { new (): ElectricityStandingDataBDT };
}
export var ElectricityStandingDataBDT: { new (): ElectricityStandingDataBDT };

/** Purpose - used in MeterDataVerifyRequest transaction based on NMITransactionBase */
interface _ElectricityVerifyMeterRequestData extends _NMITransactionBase {
  version?: r36;
  Current?: ElectricityMeterReadData;
  InvestigationCode: ElecIndexInvestigationCode;
  InvestigationDescription: SpecialComments;
  NMIConfiguration?: NMIConfigurationType;
  NMIStandingData: NMIStandingData;
  RequestPeriod: OpenPeriod;
}
export interface ElectricityVerifyMeterRequestData
  extends _ElectricityVerifyMeterRequestData {
  constructor: { new (): ElectricityVerifyMeterRequestData };
}
export var ElectricityVerifyMeterRequestData: {
  new (): ElectricityVerifyMeterRequestData;
};

/** Id for element clusters of intermittent generators */
export type ElementClusterId = string;
type _ElementClusterId = Primitive._string;

/** To specify number of generation elements which are not available */
export type ElementsNotAvailable = number;
type _ElementsNotAvailable = Primitive._number;

/** Purpose - Define email format. */
export type EmailAddress = string;
type _EmailAddress = Primitive._string;

/** Purpose - Describe an embedded network identifier
 * MSATS Data Model Column - EmbNetIdDesc
 * Detail - The description is intended to assist in identification of the correct identifier. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type EmbeddedNetworkDescription = string;
type _EmbeddedNetworkDescription = Primitive._string;

/** Purpose - Identify an embedded network
 * MSATS Data Model Column - EmbNetIdCode, EmbNetParent, EmbNetChild */
export type EmbeddedNetworkIdentifier = string;
type _EmbeddedNetworkIdentifier = Primitive._string;

/** Purpose - Row of the EmbeddedNetworkIdentifiers table
 * MSATS Data Model Table - CATS_Emb_Net_ID_Codes
 * Replication Table Name - EmbeddedNetworkIdentifiers */
interface _EmbeddedNetworkIdentifierRow extends _ReplicationDateRangeRow {
  Description: string;
  DLFCodeParentNMI?: string;
  ExemptEmbeddedNSP?: PartyIdentifier;
  Identifier: string;
  Locality: string;
  PostCode: string;
  State: AustralianStateOrTerritory;
  TNICodeParentNMI?: string;
}
export interface EmbeddedNetworkIdentifierRow
  extends _EmbeddedNetworkIdentifierRow {
  constructor: { new (): EmbeddedNetworkIdentifierRow };
}
export var EmbeddedNetworkIdentifierRow: {
  new (): EmbeddedNetworkIdentifierRow;
};

/** Classification of customer type, value assigned by FRMP.Examples might include "BUS" or "RES". This is not related to the CustomerType defined on the Service Order. */
export type EMSDCustomerClassificationCode = string;
type _EMSDCustomerClassificationCode = Primitive._string;

/** Classification of customer consumption threshold, value assigned by DNSP. Examples might include LOW, MED, HIGH. */
export type EMSDCustomerThresholdCode = string;
type _EMSDCustomerThresholdCode = Primitive._string;

/** The energisation status of the metering installation
 * Version 1.0 additions
 * - Active
 * - Not Connected
 * - Deenergised Before Meter
 * - Deenergised At Meter
 * - Deenergised After Meter */
export type EnergisationStatus =
  | "Active"
  | "Not Connected"
  | "Deenergised Before Meter"
  | "Deenergised At Meter"
  | "Deenergised After Meter";
interface _EnergisationStatus extends Primitive._string {
  content: EnergisationStatus;
}

/** Purpose -Indicate the energy market to which the message belongs
 * Detail - Markets are currently defined for the National Electricity Market, the NSW Gas Market and the Victorian Gas Market. */
export type EnergyMarket =
  | "AATELEC"
  | "ACTELEC"
  | "NEM"
  | "NSWELEC"
  | "NTELEC"
  | "QLDELEC"
  | "SAELEC"
  | "TASELEC"
  | "VICELEC"
  | "WAELEC"
  | "AATGAS"
  | "ACTGAS"
  | "NSWGAS"
  | "NTGAS"
  | "QLDGAS"
  | "SAGAS"
  | "TASGAS"
  | "VICGAS"
  | "WAGAS"
  | "NSWACTGAS";
interface _EnergyMarket extends Primitive._string {
  content: EnergyMarket;
}

export type EnergyQuantity = number;
type _EnergyQuantity = Primitive._number;

/** Enumeration of Assessment Issue catagories */
export type EnumAssessmentIssueType =
  | "Constraint Required"
  | "Contingency"
  | "Ratings"
  | "General";
interface _EnumAssessmentIssueType extends Primitive._string {
  content: EnumAssessmentIssueType;
}

/** Enumeration of Assessment Note catagories */
export type EnumAssessmentNoteType =
  | "Condition of Approval"
  | "Constraint Information"
  | "General"
  | "Market Notice"
  | "Network Analysis"
  | "Security Requirement";
interface _EnumAssessmentNoteType extends Primitive._string {
  content: EnumAssessmentNoteType;
}

/** Enumeration of possible services affected by a Booking. */
export type EnumBookingElementServiceAffectedType =
  | "HV plant"
  | "HV A/R OFF"
  | "HV trip & A/R test"
  | "HV plant protection+trip test"
  | "HV plant protection"
  | "System Protection"
  | "UV control scheme"
  | "UF load shed scheme"
  | "Overload scheme"
  | "DC link scheme"
  | "Other control scheme"
  | "Voice"
  | "Data & controls"
  | "AGC controls"
  | "Other equipment";
interface _EnumBookingElementServiceAffectedType extends Primitive._string {
  content: EnumBookingElementServiceAffectedType;
}

/** Enumeration of possible RIEMNS compliant booking certainty */
export type EnumCertaintyType = "Scheduled" | "Resourced" | "Confirmed";
interface _EnumCertaintyType extends Primitive._string {
  content: EnumCertaintyType;
}

/** Company Note type is used by both booking and outage notes. The word Company was used in the name to avoid confusion with Assessment note type. */
export type EnumCompanyNoteType =
  | "Effect On System / Work Details"
  | "Contingency Plan"
  | "Issue Response"
  | "Pre-Requisite Switching"
  | "Limit Equation Data"
  | "Isolation Points";
interface _EnumCompanyNoteType extends Primitive._string {
  content: EnumCompanyNoteType;
}

/** Enumeration of statuses that can be assigned to an outage */
export type EnumOutageStatusType =
  | "SUBMIT"
  | "RESUBMIT"
  | "MTLTP"
  | "STLTP"
  | "PDLTP"
  | "PTP"
  | "PTR"
  | "COMPLETE"
  | "UTP"
  | "WD REQ"
  | "WDRAWN"
  | "INFO";
interface _EnumOutageStatusType extends Primitive._string {
  content: EnumOutageStatusType;
}

/** Enumeration of possible RIEMNS compliant outage reasons */
export type EnumReasonType =
  | "HV equipt maintenance"
  | "Secondary equipt maintenance"
  | "HV equipt commissioning"
  | "Secondary equipt commissioning"
  | "Voltage Control";
interface _EnumReasonType extends Primitive._string {
  content: EnumReasonType;
}

/** Enumeration of possible reasons an outage planned and actual times may vary */
export type EnumReasonVarPlanActualType =
  | "Not Supplied"
  | "Security Requirement"
  | "System Conditions"
  | "Weather"
  | "Resource Problems";
interface _EnumReasonVarPlanActualType extends Primitive._string {
  content: EnumReasonVarPlanActualType;
}

/** Enumeration of possible reason for resubmission or withdrawal of an outage */
export type EnumResubmitReasonType =
  | "Not Supplied"
  | "Information Update"
  | "Optimising Availability"
  | "Environ Hazards"
  | "Resource Problems"
  | "AEMO Request"
  | "System Incident"
  | "Weather";
interface _EnumResubmitReasonType extends Primitive._string {
  content: EnumResubmitReasonType;
}

/** Enumeration of possible RIEMNS compliant scopes of work for a booking */
export type EnumScopeOfWorkType =
  | "Line"
  | "Substn"
  | "Line/Substn"
  | "Live Line"
  | "Live Substn"
  | "Live Line/Substn"
  | "Protection"
  | "SCADA"
  | "Communications"
  | "Other secondary equipt"
  | "Auto Control Scheme"
  | "Other";
interface _EnumScopeOfWorkType extends Primitive._string {
  content: EnumScopeOfWorkType;
}

/** Purpose - Envelope used by all aseXMLcompliant messages
 * Detail - The envelope consists of a header element followed by a payload element. The payload may either be one or more transactions, or one or more acknowledgements.
 * A detailed description of aseXML may be found in "Guidelines for Development of A Standard for Energy Transactions in XML (aseXML)". */
interface _Envelope extends BaseType {
  Acknowledgements: Acknowledgements;
  Header: Header;
  Transactions: Transactions;
}
export interface Envelope extends _Envelope {
  constructor: { new (): Envelope };
}
export var Envelope: { new (): Envelope };

/** The base type for all nos equipment */
interface _EquipmentBaseType extends BaseType {
  operationType?: NOSOperationType;
  /** The date the item of plant is commissioned. This date is not updatable once the date is in the past. */
  CommissionDate?: Date;
  /** Company Element ID is a TNSP provided ID that uniquely identifies (for that TNSP) an item of plant. CompanyElementId CAN NOT be reused even if the commission/retirement dates don't overlap. */
  CompanyElementId: string;
  /** Company Element Name is a TNSP provided name for an item of plant to be used for display purposes only. */
  CompanyElementName?: string;
  /** NEMMCO's name for this item of plant. DO NOT set for submission */
  NEMMCOName?: string;
  /** The date the item of plant is de-commissioned. This date is not updatable once the date is in the past. */
  RetirementDate?: Date;
  /** This field is only used in query results. DO NOT set for submission */
  TNSPId?: PartyIdentifier;
  /** The NEMMCO officer that validated this item of plant. DO NOT set for submission */
  ValidatedBy?: string;
}
export interface EquipmentBaseType extends _EquipmentBaseType {
  constructor: { new (): EquipmentBaseType };
}
export var EquipmentBaseType: { new (): EquipmentBaseType };

type EquipmentBaseTypeCompanyElementNameType = string;
type _EquipmentBaseTypeCompanyElementNameType = Primitive._string;

type EquipmentBaseTypeNEMMCONameType = string;
type _EquipmentBaseTypeNEMMCONameType = Primitive._string;

/** Represents a request for current information about an item of equipment */
interface _EquipmentInfoRequestKeyType extends BaseType {
  /** The TNSP generated ID for an item of equipment */
  CompanyElementId: string;
  /** The B2B id of the TNSP that owns the equipment. Only required if the requesting TNSP is not the same  TNSP that owns the equipment. */
  TNSPId?: PartyIdentifier;
}
export interface EquipmentInfoRequestKeyType
  extends _EquipmentInfoRequestKeyType {
  constructor: { new (): EquipmentInfoRequestKeyType };
}
export var EquipmentInfoRequestKeyType: { new (): EquipmentInfoRequestKeyType };

/** For reporting successful submission or error causing the submission to fail. */
interface _EquipmentResponseType extends BaseType {
  operationType: NOSOperationType;
  /** Unique id provided by the request initiator for an Equipment Item. */
  CompanyElementId: string;
  /** Any errors that caused the operation on this Equipment Item to be rejected. */
  Error?: NOSErrorType[];
  /** Contains overall success/failure */
  Event: Event;
}
export interface EquipmentResponseType extends _EquipmentResponseType {
  constructor: { new (): EquipmentResponseType };
}
export var EquipmentResponseType: { new (): EquipmentResponseType };

/** Purpose - Row of the ErrorCodes table
 * MSATS Data Model Table - CATS_Error_Codes
 * Replication Table Name - ErrorCodes */
interface _ErrorCodeRow extends _ReplicationDateRangeRow {
  Code: number;
  Description: string;
}
export interface ErrorCodeRow extends _ErrorCodeRow {
  constructor: { new (): ErrorCodeRow };
}
export var ErrorCodeRow: { new (): ErrorCodeRow };

/** Purpose - Used to indicate the Service Order is to be prioritised over other Service Orders.
 * Version 1.0 additions
 * - Complaint
 * - Ombudsman
 * - VIP
 * - No Supply
 * - Other */
export type Escalation =
  | "Complaint"
  | "Ombudsman"
  | "VIP"
  | "No Supply"
  | "Other";
interface _Escalation extends Primitive._string {
  content: Escalation;
}

/** Purpose - Definition for ERFTRevisedEstimationResultsData
 * Details - Results of Estimation and Reconciliation to User (Sent as a Notification Transaction) */
interface _EstimationResultsDataType extends BaseType {
  gasDate: Date;
  networkID: string;
  participantID: string;
  AllocationOfNetSectionLoad?: number;
  ReconciliationAccountBalance?: number;
  ReconciliationAdjustmentAmount?: number;
  TotalApportionmentPercentage?: number;
  TotalDailyWithdrawal?: number;
  TotalDistributedWithdrawal?: number;
  TotalEstimatedWithdrawal: number;
}
export interface EstimationResultsDataType extends _EstimationResultsDataType {
  constructor: { new (): EstimationResultsDataType };
}
export var EstimationResultsDataType: { new (): EstimationResultsDataType };

/** Purpose - Definition for ERFTEstimationResultsToUserRpt
 * Report Details - Users Results of Estimation and Reconciliation */
interface _EstimationResultsRpt extends _BaseReportFormat {
  reportType?: ReportType;
  version?: r34;
  EstimationResultsData: EstimationResultsDataType[];
}
export interface EstimationResultsRpt extends _EstimationResultsRpt {
  constructor: { new (): EstimationResultsRpt };
}
export var EstimationResultsRpt: { new (): EstimationResultsRpt };

/** Purpose - Common format used to report events
 * Detail - aseXML encourages the use of events in transactions to report status information. They are also used in message and transaction acknowledgements. Where possible, an element name of "Event" should be used. */
interface _Event extends BaseType {
  class?: EventClass;
  severity?: EventSeverity;
  Code: EventCode;
  Context?: string;
  Explanation?: string;
  KeyInfo?: string;
  SupportedVersions?: EventSupportedVersions;
}
export interface Event extends _Event {
  constructor: { new (): Event };
}
export var Event: { new (): Event };

/** Purpose - Network charge record type - "200" - EventCharge */
interface _EventCharge extends _BaseChargeItem {
  version?: r11;
  Description: string;
  Quantity: number;
  Rate: number;
  UnitOfMeasure: UnitsOfMeasure;
}
export interface EventCharge extends _EventCharge {
  constructor: { new (): EventCharge };
}
export var EventCharge: { new (): EventCharge };

type EventChargeQuantityType = number;
type _EventChargeQuantityType = Primitive._number;

/** Purpose - Provide a high level categorisation of events
 * Detail - Message events pertain to the structure and delivery of aseXML messages.
 * Application events are generated by the applications communicating via aseXML.
 * Processing events reflect environmental issues associated with running applications. */
export type EventClass = "Message" | "Application" | "Processing";
interface _EventClass extends Primitive._string {
  content: EventClass;
}

/** Purpose - Provide a numeric indentification of the event that has occurred
 * Detail - The aseXML guidelines define a set of common codes, as well as ranges for application specfiic errors. Where the receiving system does not know the textual definition of the code, the description attribute should be provided with the code, as per the aseXML guidelines. */
interface _EventCode extends _EventCodeBase {
  description?: string;
}
export interface EventCode extends _EventCode {
  constructor: { new (): EventCode };
}
export var EventCode: { new (): EventCode };

/** Purpose - Helper type in defining EventCode */
export type EventCodeBase = number;
type _EventCodeBase = Primitive._number;

/** Purpose - Identify the specific data/condition that caused the event
 * Detail - The portion of the input to which the event applies should be provided. */
export type EventContext = string;
type _EventContext = Primitive._string;

/** Purpose - Provide information to allow identification of the data that triggered the event
 * Detail - Where the combination of class and code are insufficient to completely describe an event, KeyInfo may be used to provide further detail as to the information needed to locate the source of the event within the original transaction. */
export type EventKeyInfo = string;
type _EventKeyInfo = Primitive._string;

/** Purpose - Provide an indication as to the action required as a result of receiving an event
 * Detail - The severity dictates the further processing possible after receiving the event. */
export type EventSeverity = "Information" | "Warning" | "Error" | "Fatal";
interface _EventSeverity extends Primitive._string {
  content: EventSeverity;
}

/** Purpose - Provide the set of versions supported for a particular transaction
 * Detail - Where an unsupported version of a supported transaction is received, the receiver should indicate those versions that are supported, allowing the receiver to choose a compatible transaction version. */
interface _EventSupportedVersions extends BaseType {
  Version: string[];
}
export interface EventSupportedVersions extends _EventSupportedVersions {
  constructor: { new (): EventSupportedVersions };
}
export var EventSupportedVersions: { new (): EventSupportedVersions };

/** Purpose - Network charge record type - "600" - ExcludedService */
interface _ExcludedService extends _BaseChargeItem {
  version?: r11;
  AfterHourIndicator: string;
  Code: string;
  CompletionCode?: string;
  Description: string;
  Quantity: number;
  Rate: number;
}
export interface ExcludedService extends _ExcludedService {
  constructor: { new (): ExcludedService };
}
export var ExcludedService: { new (): ExcludedService };

type ExcludedServiceAfterHourIndicatorType = string;
type _ExcludedServiceAfterHourIndicatorType = Primitive._string;

type ExcludedServiceCodeType = string;
type _ExcludedServiceCodeType = Primitive._string;

type ExcludedServiceCompletionCodeType = string;
type _ExcludedServiceCompletionCodeType = Primitive._string;

type ExcludedServiceQuantityType = number;
type _ExcludedServiceQuantityType = Primitive._number;

export type ExcludedServicesCategory =
  | "Logger"
  | "Mains"
  | "Meter"
  | "O+M"
  | "Other"
  | "Service";
interface _ExcludedServicesCategory extends Primitive._string {
  content: ExcludedServicesCategory;
}

/** Purpose - Definition for IAITExpiredImbalanceTradeRpt
 * Report Details - Notification of a Expired Trade. */
interface _ExpiredImbalanceTradeRpt extends _BaseReportFormat {
  ExpiredImbalanceData: ExpiredImbalanceTradeRptExpiredImbalanceDataType;
}
export interface ExpiredImbalanceTradeRpt extends _ExpiredImbalanceTradeRpt {
  constructor: { new (): ExpiredImbalanceTradeRpt };
}
export var ExpiredImbalanceTradeRpt: { new (): ExpiredImbalanceTradeRpt };

interface _ExpiredImbalanceTradeRptExpiredImbalanceDataType extends BaseType {
  InitiatingReceiptID: string;
}
interface ExpiredImbalanceTradeRptExpiredImbalanceDataType
  extends _ExpiredImbalanceTradeRptExpiredImbalanceDataType {
  constructor: { new (): ExpiredImbalanceTradeRptExpiredImbalanceDataType };
}

/** Call back required to customer/informant */
interface _FaultCallBack extends _ContactDetail {
  callBackRequired: boolean;
  timeRequired?: Date;
}
export interface FaultCallBack extends _FaultCallBack {
  constructor: { new (): FaultCallBack };
}
export var FaultCallBack: { new (): FaultCallBack };

/** Status of the call back, ie has the person been contacted. */
interface _FaultCallBackStatus extends BaseType {
  calledBack: boolean;
  timeStamp?: Date;
}
export interface FaultCallBackStatus extends _FaultCallBackStatus {
  constructor: { new (): FaultCallBackStatus };
}
export var FaultCallBackStatus: { new (): FaultCallBackStatus };

/** Description of the fault and associated information */
interface _FaultDescription extends BaseType {
  FaultDescriptionComments?: FaultDescriptionFaultDescriptionCommentsType;
  FaultLocation: FaultLocation;
  LifeSupport: boolean;
  PublicLightingGSL?: PublicLightingGSL;
  SensitiveLoad: SensitiveLoad;
  Symptoms: FaultSymptoms;
}
export interface FaultDescription extends _FaultDescription {
  constructor: { new (): FaultDescription };
}
export var FaultDescription: { new (): FaultDescription };

interface _FaultDescriptionFaultDescriptionCommentsType extends BaseType {
  Line: string[];
}
interface FaultDescriptionFaultDescriptionCommentsType
  extends _FaultDescriptionFaultDescriptionCommentsType {
  constructor: { new (): FaultDescriptionFaultDescriptionCommentsType };
}

/** Indication if the fault has been dispatched or not */
interface _FaultDispatchStatus extends BaseType {
  dispatched: boolean;
  timeStamp?: Date;
}
export interface FaultDispatchStatus extends _FaultDispatchStatus {
  constructor: { new (): FaultDispatchStatus };
}
export var FaultDispatchStatus: { new (): FaultDispatchStatus };

/** Person who reported fault */
interface _FaultInformant extends _ContactDetail {}
export interface FaultInformant extends _FaultInformant {
  constructor: { new (): FaultInformant };
}
export var FaultInformant: { new (): FaultInformant };

/** Application - To be used to request fault information when a retail customer has called with a fault
 * TransactionExchange - Initial transaction from a Retailer or service provider  to an LNSP
 * TransactionGroup - FLTS
 * Priority - High
 * Purpose - Used for requesting fault information about a premise or location
 * Detail - */
interface _FaultInformationRequest extends BaseType {
  version?: r12;
  FaultLocation: FaultLocation;
  NMI?: NMI;
}
export interface FaultInformationRequest extends _FaultInformationRequest {
  constructor: { new (): FaultInformationRequest };
}
export var FaultInformationRequest: { new (): FaultInformationRequest };

/** Location of the fault i.e. vicinty if not strcitly at a premise, otherwise premise */
interface _FaultLocation extends _AustralianAddress {
  locationType: FaultLocationLocationTypeType;
}
export interface FaultLocation extends _FaultLocation {
  constructor: { new (): FaultLocation };
}
export var FaultLocation: { new (): FaultLocation };

type FaultLocationLocationTypeType = "Premise" | "Vicinity";
interface _FaultLocationLocationTypeType extends Primitive._string {
  content: FaultLocationLocationTypeType;
}

/** Application - To be used by an a Retailer to notify an LNSP of a fault where the FaultOutageAdvice was returned as "unknown", thus the Retailer has more information about a fault and must report it to the LNSP.
 * TransactionExchange - This tranaction would follow a FaultOutageAdvice if returned as unknown.
 * TransactionGroup - FLTS
 * Priority - High
 * Purpose - For a Retailer to notify an LNSP of a fault in the even that the Retailer has more information about the fault.
 * Detail - */
interface _FaultNotification extends BaseType {
  version?: r14;
  CallBack?: FaultCallBack;
  FaultDescription: FaultDescription;
  FaultInformant?: FaultInformant;
  NMI?: NMI;
  RetailerPriority?: Priority;
  /** Timestamp indicating when the informant advised of the fault. */
  TimeOfCall: Date;
  /** Timestamp indicating when the fault first occurred. */
  TimeOfOccurrence?: Date;
}
export interface FaultNotification extends _FaultNotification {
  constructor: { new (): FaultNotification };
}
export var FaultNotification: { new (): FaultNotification };

/** Application - To be used by an LNSP to pass fault information to a Retailer.
 * TransactionExchange -  The reponse transaction to a "FaultInfoRequest".
 * TransactionGroup - FLTS
 * Priority - High
 * Purpose -
 * Detail - */
interface _FaultOutageAdvice extends BaseType {
  faultResponseType?: FaultResponseType;
  outageType: OutageType;
  version?: r14;
  CallBackStatus?: FaultCallBackStatus;
  CustomersAffected?: CustomersAffected;
  DispatchStatus?: FaultDispatchStatus;
  EstimatedTimeToRestore?: Date;
  FaultDescription: FaultDescription;
  FaultOutageAdviceComments?: FaultOutageAdviceFaultOutageAdviceCommentsType;
  MakeSafe?: Date;
  MostSupplyRestored?: Date;
  NMI?: NMI;
  SiteArrival?: Date;
  /** Timestamp indicating the start of the fault as recognised by the LNSP. */
  TimeOfOccurrence?: Date;
  TimeRestored?: Date;
  TroubleCause?: TroubleCause;
}
export interface FaultOutageAdvice extends _FaultOutageAdvice {
  constructor: { new (): FaultOutageAdvice };
}
export var FaultOutageAdvice: { new (): FaultOutageAdvice };

interface _FaultOutageAdviceFaultOutageAdviceCommentsType extends BaseType {
  Line: string[];
}
interface FaultOutageAdviceFaultOutageAdviceCommentsType
  extends _FaultOutageAdviceFaultOutageAdviceCommentsType {
  constructor: { new (): FaultOutageAdviceFaultOutageAdviceCommentsType };
}

/** The type of response provided by a Fault Advice */
export type FaultResponseType = "Unknown" | "Update" | "Completed" | "Close";
interface _FaultResponseType extends Primitive._string {
  content: FaultResponseType;
}

/** Symptom/s of the fault */
interface _FaultSymptoms extends BaseType {
  Symptom: FaultSymptomsSymptomType[];
}
export interface FaultSymptoms extends _FaultSymptoms {
  constructor: { new (): FaultSymptoms };
}
export var FaultSymptoms: { new (): FaultSymptoms };

type FaultSymptomsSymptomType =
  | "ACR tripped"
  | "Area street lights out"
  | "Car hit pole"
  | "Dim lights"
  | "Damage to u/ground pillar"
  | "Electric shock"
  | "Explosion reports"
  | "Fuse down"
  | "Fire"
  | "Glow reports"
  | "High voltage injection"
  | "Hot water 16h boost"
  | "Intermittent supply"
  | "Insufficient hot water"
  | "Light/s out found by patrol"
  | "Loss of supply - complete"
  | "Loss of supply - partial"
  | "Meter/timeswitch faulty"
  | "No hot water"
  | "Not listed"
  | "Other"
  | "Pole Down"
  | "Pole Fire"
  | "Urgent Public Hazard Report "
  | "Urgent Public Hazard Report - fire"
  | "Planned Outage"
  | "Street lights out"
  | "Sparks Reports"
  | "Tree Near Wire"
  | "Tree On Wire"
  | "TV Interference"
  | "Underground Cable"
  | "Unknown"
  | "Voltage complaints"
  | "Wires down - pole to house"
  | "Wires down - pole to pole"
  | "Watchman Light Out"
  | "Wildlife report";
interface _FaultSymptomsSymptomType extends Primitive._string {
  content: FaultSymptomsSymptomType;
}

/** Classification of High Voltage distribution line feeding property. */
export type FeederClass = string;
type _FeederClass = Primitive._string;

/** Schema - ServiceOrder */
interface _FieldWorkNotification extends BaseType {
  version?: r9;
  CSVMainsServiceRenewal: CSVRequestFormat;
  CSVTimeExpiredMeters: CSVRequestFormat;
}
export interface FieldWorkNotification extends _FieldWorkNotification {
  constructor: { new (): FieldWorkNotification };
}
export var FieldWorkNotification: { new (): FieldWorkNotification };

export type FlowControlAction = "ADD" | "REMOVE";
interface _FlowControlAction extends Primitive._string {
  content: FlowControlAction;
}

/** Purpose - Advise a participant of a new stop file or change  in state. */
interface _FlowControlAlert extends BaseType {
  Action?: FlowControlAction;
  AlertType: string;
  Cause: string;
  ParticipantID: PartyIdentifier;
  RemoveDateTime?: Date;
  StopDateTime?: Date;
  StopFileName?: string;
}
export interface FlowControlAlert extends _FlowControlAlert {
  constructor: { new (): FlowControlAlert };
}
export var FlowControlAlert: { new (): FlowControlAlert };

/** List of flow control alerts. */
interface _FlowControlAlerts extends BaseType {
  FlowControlAlert?: FlowControlAlert[];
}
export interface FlowControlAlerts extends _FlowControlAlerts {
  constructor: { new (): FlowControlAlerts };
}
export var FlowControlAlerts: { new (): FlowControlAlerts };

export type GasAgencyApportionmentType = "PROR" | "PREF";
interface _GasAgencyApportionmentType extends Primitive._string {
  content: GasAgencyApportionmentType;
}

interface _GasAgencyConfirmationHeaderType extends BaseType {
  CloseProximityPoint: NMI;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  NominationId: number;
  NominationStatus?: GasNominationStatusType;
  NomineeId?: number;
  Period: Period;
  Quantity?: number;
}
export interface GasAgencyConfirmationHeaderType
  extends _GasAgencyConfirmationHeaderType {
  constructor: { new (): GasAgencyConfirmationHeaderType };
}
export var GasAgencyConfirmationHeaderType: {
  new (): GasAgencyConfirmationHeaderType;
};

type GasAgencyConfirmationHeaderTypeLastModifiedByType = string;
type _GasAgencyConfirmationHeaderTypeLastModifiedByType = Primitive._string;

interface _GasAgencyConfirmationSearchType extends BaseType {
  CloseProximityPoint: NMI;
  InjectorId?: number;
  Period?: Period;
}
export interface GasAgencyConfirmationSearchType
  extends _GasAgencyConfirmationSearchType {
  constructor: { new (): GasAgencyConfirmationSearchType };
}
export var GasAgencyConfirmationSearchType: {
  new (): GasAgencyConfirmationSearchType;
};

interface _GasAgencyConfirmationsType extends BaseType {
  AgencyConfirmation?: GasAgencyConfirmationHeaderType[];
}
export interface GasAgencyConfirmationsType
  extends _GasAgencyConfirmationsType {
  constructor: { new (): GasAgencyConfirmationsType };
}
export var GasAgencyConfirmationsType: { new (): GasAgencyConfirmationsType };

interface _GasAgencyConfirmationType extends BaseType {
  CompanyId?: number;
  NominationId: number;
  NominationStatus?: GasNominationStatusType;
}
export interface GasAgencyConfirmationType extends _GasAgencyConfirmationType {
  constructor: { new (): GasAgencyConfirmationType };
}
export var GasAgencyConfirmationType: { new (): GasAgencyConfirmationType };

interface _GasAgencyNomDetailsType extends BaseType {
  Nomination: GasAgencyNomDetailType[];
}
export interface GasAgencyNomDetailsType extends _GasAgencyNomDetailsType {
  constructor: { new (): GasAgencyNomDetailsType };
}
export var GasAgencyNomDetailsType: { new (): GasAgencyNomDetailsType };

interface _GasAgencyNomDetailType extends BaseType {
  HeaderId?: number;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  NominationId?: number;
  NominationStatus?: GasNominationStatusType;
  NomineeId: number;
  PreferenceOrder?: number;
  Quantity: number;
}
export interface GasAgencyNomDetailType extends _GasAgencyNomDetailType {
  constructor: { new (): GasAgencyNomDetailType };
}
export var GasAgencyNomDetailType: { new (): GasAgencyNomDetailType };

type GasAgencyNomDetailTypeLastModifiedByType = string;
type _GasAgencyNomDetailTypeLastModifiedByType = Primitive._string;

type GasAgencyNomDetailTypePreferenceOrderType = number;
type _GasAgencyNomDetailTypePreferenceOrderType = Primitive._number;

interface _GasAgencyNomHeaderType extends BaseType {
  ApportionType?: GasAgencyApportionmentType;
  CloseProximityPoint: NMI;
  CompanyId?: number;
  HeaderId?: number;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  Nominations?: GasAgencyNomDetailsType;
  Period: Period;
}
export interface GasAgencyNomHeaderType extends _GasAgencyNomHeaderType {
  constructor: { new (): GasAgencyNomHeaderType };
}
export var GasAgencyNomHeaderType: { new (): GasAgencyNomHeaderType };

type GasAgencyNomHeaderTypeLastModifiedByType = string;
type _GasAgencyNomHeaderTypeLastModifiedByType = Primitive._string;

interface _GasAgencyNominationSearchType extends BaseType {
  CloseProximityPoint: NMI;
  Period?: Period;
}
export interface GasAgencyNominationSearchType
  extends _GasAgencyNominationSearchType {
  constructor: { new (): GasAgencyNominationSearchType };
}
export var GasAgencyNominationSearchType: {
  new (): GasAgencyNominationSearchType;
};

interface _GasAgencyNominationsType extends BaseType {
  AgencyNomination?: GasAgencyNomHeaderType[];
}
export interface GasAgencyNominationsType extends _GasAgencyNominationsType {
  constructor: { new (): GasAgencyNominationsType };
}
export var GasAgencyNominationsType: { new (): GasAgencyNominationsType };

interface _GasAgencyNomStatusHistoryType extends BaseType {
  CreatedDate?: Date;
  HeaderId?: number;
  NominationConfirmedDate?: Date;
  NominationDate?: Date;
  NominationId?: number;
  NominationStatus?: GasNominationStatusType;
  WithdrawalConfirmedDate?: Date;
  WithdrawalDate?: Date;
}
export interface GasAgencyNomStatusHistoryType
  extends _GasAgencyNomStatusHistoryType {
  constructor: { new (): GasAgencyNomStatusHistoryType };
}
export var GasAgencyNomStatusHistoryType: {
  new (): GasAgencyNomStatusHistoryType;
};

interface _GasAmdqNominationSearchType extends BaseType {
  CloseProximityPoint: NMI;
  Period?: Period;
}
export interface GasAmdqNominationSearchType
  extends _GasAmdqNominationSearchType {
  constructor: { new (): GasAmdqNominationSearchType };
}
export var GasAmdqNominationSearchType: { new (): GasAmdqNominationSearchType };

interface _GasAmdqNominationsType extends BaseType {
  Nomination?: GasANType[];
}
export interface GasAmdqNominationsType extends _GasAmdqNominationsType {
  constructor: { new (): GasAmdqNominationsType };
}
export var GasAmdqNominationsType: { new (): GasAmdqNominationsType };

interface _GasANAMDQSType extends BaseType {
  MDQN: GasANAMDQType[];
}
export interface GasANAMDQSType extends _GasANAMDQSType {
  constructor: { new (): GasANAMDQSType };
}
export var GasANAMDQSType: { new (): GasANAMDQSType };

interface _GasANAMDQType extends BaseType {
  AMDQNominationGJ?: number;
  CumulativeUsedAMDQGJ?: number;
  CumulativeUsedAMDQPct?: number;
  NMI: NMI;
  Value: number;
}
export interface GasANAMDQType extends _GasANAMDQType {
  constructor: { new (): GasANAMDQType };
}
export var GasANAMDQType: { new (): GasANAMDQType };

interface _GasANHeaderType extends BaseType {
  AvailableAMDQGJ?: number;
  CloseProximityPoint: NMI;
  CompanyId?: number;
  HeaderId?: number;
  Period: Period;
}
export interface GasANHeaderType extends _GasANHeaderType {
  constructor: { new (): GasANHeaderType };
}
export var GasANHeaderType: { new (): GasANHeaderType };

interface _GasANType extends BaseType {
  MDQNS: GasANAMDQSType;
  NominationHeader: GasANHeaderType;
}
export interface GasANType extends _GasANType {
  constructor: { new (): GasANType };
}
export var GasANType: { new (): GasANType };

/** Schema - Gas */
interface _GasBasicMeterStandingData extends BaseType {
  MeterReadFrequency?: GasMeterReadFrequency;
  NextScheduledReadDate?: Date;
  NextScheduledSpecialRead?: AppointmentDetail;
  ScheduledReadingDayNumber?: string;
}
export interface GasBasicMeterStandingData extends _GasBasicMeterStandingData {
  constructor: { new (): GasBasicMeterStandingData };
}
export var GasBasicMeterStandingData: { new (): GasBasicMeterStandingData };

/** Schema - Gas */
interface _GasBasicMultiMeterStandingData extends BaseType {
  NextScheduledReadDate?: Date;
  NextScheduledSpecialRead?: AppointmentDetail;
  ScheduledReadingDayNumber?: string;
}
export interface GasBasicMultiMeterStandingData
  extends _GasBasicMultiMeterStandingData {
  constructor: { new (): GasBasicMultiMeterStandingData };
}
export var GasBasicMultiMeterStandingData: {
  new (): GasBasicMultiMeterStandingData;
};

interface _GasBidSearchType extends BaseType {
  BidType: GasInjectWithdrawType;
  NMI: NMI;
  Period?: Period;
}
export interface GasBidSearchType extends _GasBidSearchType {
  constructor: { new (): GasBidSearchType };
}
export var GasBidSearchType: { new (): GasBidSearchType };

interface _GasBidSetsType extends BaseType {
  BidSet?: GasBidSetType[];
}
export interface GasBidSetsType extends _GasBidSetsType {
  constructor: { new (): GasBidSetsType };
}
export var GasBidSetsType: { new (): GasBidSetsType };

interface _GasBidSetType extends BaseType {
  Bids: GasBidsType;
  BidSetId?: number;
  BidType: GasInjectWithdrawType;
  CompanyId?: number;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  NMI: NMI;
  Period: Period;
}
export interface GasBidSetType extends _GasBidSetType {
  constructor: { new (): GasBidSetType };
}
export var GasBidSetType: { new (): GasBidSetType };

type GasBidSetTypeLastModifiedByType = string;
type _GasBidSetTypeLastModifiedByType = Primitive._string;

export type GasBidStepNumberType = number;
type _GasBidStepNumberType = Primitive._number;

interface _GasBidStepsType extends BaseType {
  BidStep: GasBidStepType[];
}
export interface GasBidStepsType extends _GasBidStepsType {
  constructor: { new (): GasBidStepsType };
}
export var GasBidStepsType: { new (): GasBidStepsType };

interface _GasBidStepType extends BaseType {
  BidId?: number;
  DailyQuantity: number;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  Price: number;
  Step: number;
}
export interface GasBidStepType extends _GasBidStepType {
  constructor: { new (): GasBidStepType };
}
export var GasBidStepType: { new (): GasBidStepType };

type GasBidStepTypeLastModifiedByType = string;
type _GasBidStepTypeLastModifiedByType = Primitive._string;

interface _GasBidsType extends BaseType {
  Bid: GasBidType[];
}
export interface GasBidsType extends _GasBidsType {
  constructor: { new (): GasBidsType };
}
export var GasBidsType: { new (): GasBidsType };

interface _GasBidType extends BaseType {
  BidId?: number;
  BidSetId?: number;
  BidSteps: GasBidStepsType;
  HorizonIndex?: number;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  MinimumDailyQuantity?: number;
}
export interface GasBidType extends _GasBidType {
  constructor: { new (): GasBidType };
}
export var GasBidType: { new (): GasBidType };

type GasBidTypeLastModifiedByType = string;
type _GasBidTypeLastModifiedByType = Primitive._string;

/** NSW/ACT Connection Types
 * N - New Home
 * E - Existing Home
 * H - Hot Water Breakdown */
export type GasConnectionType = "N" | "E" | "H";
interface _GasConnectionType extends Primitive._string {
  content: GasConnectionType;
}

interface _GasForecastSearchType extends BaseType {
  NMI?: NMI;
  Period?: Period;
  SpecificSite: boolean;
}
export interface GasForecastSearchType extends _GasForecastSearchType {
  constructor: { new (): GasForecastSearchType };
}
export var GasForecastSearchType: { new (): GasForecastSearchType };

interface _GasForecastsType extends BaseType {
  Forecast?: GasForecastType[];
}
export interface GasForecastsType extends _GasForecastsType {
  constructor: { new (): GasForecastsType };
}
export var GasForecastsType: { new (): GasForecastsType };

interface _GasForecastType extends BaseType {
  CompanyId?: number;
  ForecastId?: number;
  ForecastValues: GasForecastValuesType;
  LastModifiedBy?: string;
  LastModifiedDate?: Date;
  NMI?: NMI;
  Period: Period;
  SpecificSite?: boolean;
}
export interface GasForecastType extends _GasForecastType {
  constructor: { new (): GasForecastType };
}
export var GasForecastType: { new (): GasForecastType };

type GasForecastTypeLastModifiedByType = string;
type _GasForecastTypeLastModifiedByType = Primitive._string;

interface _GasForecastValidationType extends BaseType {
  NMI?: NMI;
  SpecificSite: boolean;
  ValidationValues?: GasForecastValuesType;
}
export interface GasForecastValidationType extends _GasForecastValidationType {
  constructor: { new (): GasForecastValidationType };
}
export var GasForecastValidationType: { new (): GasForecastValidationType };

interface _GasForecastValuesType extends BaseType {
  ForecastValue: GasForecastValuesTypeForecastValueType[];
}
export interface GasForecastValuesType extends _GasForecastValuesType {
  constructor: { new (): GasForecastValuesType };
}
export var GasForecastValuesType: { new (): GasForecastValuesType };

interface _GasForecastValuesTypeForecastValueType extends Primitive._number {
  hour: string;
}
interface GasForecastValuesTypeForecastValueType
  extends _GasForecastValuesTypeForecastValueType {
  constructor: { new (): GasForecastValuesTypeForecastValueType };
}

interface _GasIHNAMDQSType extends BaseType {
  IHN: GasIHNAMDQType[];
}
export interface GasIHNAMDQSType extends _GasIHNAMDQSType {
  constructor: { new (): GasIHNAMDQSType };
}
export var GasIHNAMDQSType: { new (): GasIHNAMDQSType };

interface _GasIHNAMDQType extends BaseType {
  CloseProximityPoint: NMI;
  Quantity: number;
}
export interface GasIHNAMDQType extends _GasIHNAMDQType {
  constructor: { new (): GasIHNAMDQType };
}
export var GasIHNAMDQType: { new (): GasIHNAMDQType };

interface _GasIHNAMIQSType extends BaseType {
  AMIQ: GasIHNAMIQType[];
}
export interface GasIHNAMIQSType extends _GasIHNAMIQSType {
  constructor: { new (): GasIHNAMIQSType };
}
export var GasIHNAMIQSType: { new (): GasIHNAMIQSType };

interface _GasIHNAMIQType extends BaseType {
  IntervalId: number;
  Value: number;
}
export interface GasIHNAMIQType extends _GasIHNAMIQType {
  constructor: { new (): GasIHNAMIQType };
}
export var GasIHNAMIQType: { new (): GasIHNAMIQType };

interface _GasIHNHeaderType extends BaseType {
  CompanyId?: number;
  HeaderId?: number;
  Period: Period;
}
export interface GasIHNHeaderType extends _GasIHNHeaderType {
  constructor: { new (): GasIHNHeaderType };
}
export var GasIHNHeaderType: { new (): GasIHNHeaderType };

interface _GasIHNType extends BaseType {
  AMIQS: GasIHNAMIQSType;
  IHNS?: GasIHNAMDQSType;
  NominationHeader: GasIHNHeaderType;
}
export interface GasIHNType extends _GasIHNType {
  constructor: { new (): GasIHNType };
}
export var GasIHNType: { new (): GasIHNType };

interface _GasInformationRequestData extends _WholesaleInformationRequestData {
  contextType: GasInformationTransactionType;
  version?: r20;
}
export interface GasInformationRequestData extends _GasInformationRequestData {
  constructor: { new (): GasInformationRequestData };
}
export var GasInformationRequestData: { new (): GasInformationRequestData };

interface _GasInformationResponseData
  extends _WholesaleInformationResponseData {
  contextType: GasInformationTransactionType;
  version?: r20;
  CurrentMarketDate: Date;
  MarketIntervalInfo: MarketIntervalInfoType;
}
export interface GasInformationResponseData
  extends _GasInformationResponseData {
  constructor: { new (): GasInformationResponseData };
}
export var GasInformationResponseData: { new (): GasInformationResponseData };

export type GasInformationTransactionType = "CGD" | "IntervalInfo";
interface _GasInformationTransactionType extends Primitive._string {
  content: GasInformationTransactionType;
}

interface _GasInjectionNominationSearchType extends BaseType {
  Period?: Period;
}
export interface GasInjectionNominationSearchType
  extends _GasInjectionNominationSearchType {
  constructor: { new (): GasInjectionNominationSearchType };
}
export var GasInjectionNominationSearchType: {
  new (): GasInjectionNominationSearchType;
};

interface _GasInjectionNominationsType extends BaseType {
  Nomination?: GasIHNType[];
}
export interface GasInjectionNominationsType
  extends _GasInjectionNominationsType {
  constructor: { new (): GasInjectionNominationsType };
}
export var GasInjectionNominationsType: { new (): GasInjectionNominationsType };

export type GasInjectWithdrawType = "INJEC" | "CTLW";
interface _GasInjectWithdrawType extends Primitive._string {
  content: GasInjectWithdrawType;
}

/** NSW Gas InstallationType. This is different to the Electricity Installation Type. */
export type GasInstallationType = string;
type _GasInstallationType = Primitive._string;

interface _GasIntervalInfoType extends BaseType {
  CutoffTime: Date;
  Id: number;
  PublishTime: Date;
}
export interface GasIntervalInfoType extends _GasIntervalInfoType {
  constructor: { new (): GasIntervalInfoType };
}
export var GasIntervalInfoType: { new (): GasIntervalInfoType };

/** Schema - Gas */
interface _GasIntervalMeterCharge extends BaseType {
  Amount: number;
  Category: ExcludedServicesCategory;
  ExpiryDate: Date;
}
export interface GasIntervalMeterCharge extends _GasIntervalMeterCharge {
  constructor: { new (): GasIntervalMeterCharge };
}
export var GasIntervalMeterCharge: { new (): GasIntervalMeterCharge };

/** Schema - Gas */
interface _GasIntervalMeterStandingData extends BaseType {
  CommunicationEquipmentPresent?: boolean;
  ExcludedServicesCharges?: GasIntervalMeterStandingDataExcludedServicesChargesType;
}
export interface GasIntervalMeterStandingData
  extends _GasIntervalMeterStandingData {
  constructor: { new (): GasIntervalMeterStandingData };
}
export var GasIntervalMeterStandingData: {
  new (): GasIntervalMeterStandingData;
};

interface _GasIntervalMeterStandingDataExcludedServicesChargesType
  extends BaseType {
  ChargeItem: GasIntervalMeterCharge[];
}
interface GasIntervalMeterStandingDataExcludedServicesChargesType
  extends _GasIntervalMeterStandingDataExcludedServicesChargesType {
  constructor: {
    new (): GasIntervalMeterStandingDataExcludedServicesChargesType;
  };
}

/** Schema - Gas */
export type GasJobCompletionCode1 =
  | "10"
  | "14"
  | "15"
  | "21"
  | "22"
  | "28"
  | "48"
  | "60"
  | "70"
  | "74";
interface _GasJobCompletionCode1 extends Primitive._string {
  content: GasJobCompletionCode1;
}

/** Schema - Gas */
export type GasJobCompletionCode2 =
  | "02"
  | "03"
  | "04"
  | "06"
  | "10"
  | "11"
  | "12"
  | "13"
  | "15"
  | "16"
  | "17"
  | "18"
  | "22"
  | "23"
  | "24"
  | "30"
  | "37"
  | "40"
  | "42"
  | "46"
  | "55"
  | "60"
  | "64"
  | "70"
  | "78"
  | "79"
  | "86"
  | "98";
interface _GasJobCompletionCode2 extends Primitive._string {
  content: GasJobCompletionCode2;
}

/** Schema - Gas */
export type GasJobCompletionCode3 =
  | "31"
  | "33"
  | "34"
  | "37"
  | "42"
  | "44"
  | "45"
  | "47"
  | "51"
  | "52"
  | "53"
  | "55"
  | "58"
  | "59"
  | "63"
  | "72"
  | "99";
interface _GasJobCompletionCode3 extends Primitive._string {
  content: GasJobCompletionCode3;
}

/** Basic standing data associated with an gas NMI. */
interface _GasMasterStandingData extends BaseType {
  AnticipatedAnnualConsumption?: number;
  AustralianPostCode?: string;
  BaseLoad?: number;
  CustomerCharacterisation?: CustomerCharacterisation;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  DistributionTariff?: DistributionTariff;
  HeatingValueZone?: string;
  MIRNAssignmentDate?: Date;
  MIRNCommissionedDate?: Date;
  MIRNStatus?: MIRNStatus;
  NetworkID?: string;
  PrimaryCustodyTransferMeter?: NMIWithChecksum;
  SmallUseCustomer?: boolean;
  TemperatureSensitivityFactor?: number;
  TransmissionZone?: number;
}
export interface GasMasterStandingData extends _GasMasterStandingData {
  constructor: { new (): GasMasterStandingData };
}
export var GasMasterStandingData: { new (): GasMasterStandingData };

/** Schema - Gas */
export type GasMeterDogCode =
  | "Bluff"
  | "Dog Caution"
  | "Dog OK"
  | "Friendly"
  | "No Dog"
  | "Savage"
  | "Tied";
interface _GasMeterDogCode extends Primitive._string {
  content: GasMeterDogCode;
}

interface _GasMeterFix extends BaseType {
  Certification: GasMeterFixCertification;
}
export interface GasMeterFix extends _GasMeterFix {
  constructor: { new (): GasMeterFix };
}
export var GasMeterFix: { new (): GasMeterFix };

/** Schema - Gas */
interface _GasMeterFixCertification extends BaseType {
  ComplexMeter: GasMeterFixCertificationComplexMeterType;
  SimpleMeter: GasMeterFixCertificationSimpleMeterType;
}
export interface GasMeterFixCertification extends _GasMeterFixCertification {
  constructor: { new (): GasMeterFixCertification };
}
export var GasMeterFixCertification: { new (): GasMeterFixCertification };

interface _GasMeterFixCertificationComplexMeterType extends BaseType {
  StartWorkNoticeNumber: string;
}
interface GasMeterFixCertificationComplexMeterType
  extends _GasMeterFixCertificationComplexMeterType {
  constructor: { new (): GasMeterFixCertificationComplexMeterType };
}

interface _GasMeterFixCertificationSimpleMeterType extends BaseType {
  COCNumber: string;
  PlumberContactDetail?: CustomerDetail;
  PlumberLicenceNumber: string;
  StartWorkNoticeNumber?: string;
}
interface GasMeterFixCertificationSimpleMeterType
  extends _GasMeterFixCertificationSimpleMeterType {
  constructor: { new (): GasMeterFixCertificationSimpleMeterType };
}

type GasMeterFixCertificationSimpleMeterTypeCOCNumberType = string;
type _GasMeterFixCertificationSimpleMeterTypeCOCNumberType = Primitive._string;

type GasMeterFixCertificationSimpleMeterTypePlumberLicenceNumberType = string;
type _GasMeterFixCertificationSimpleMeterTypePlumberLicenceNumberType =
  Primitive._string;

/** Schema - Gas */
export type GasMeterIndexValue = number;
type _GasMeterIndexValue = Primitive._number;

interface _GasMeterNotification extends BaseType {
  version?: r34;
  DateServiceOrderCompleted: Date;
  MeterFix: NMIStandingData;
  MIRNStatusUpdate: NMIStandingData;
}
export interface GasMeterNotification extends _GasMeterNotification {
  constructor: { new (): GasMeterNotification };
}
export var GasMeterNotification: { new (): GasMeterNotification };

/** Schema - Gas */
export type GasMeterPosition =
  | "BA"
  | "BG"
  | "BH"
  | "BR"
  | "BV"
  | "BW"
  | "BY"
  | "CE"
  | "CP"
  | "DR"
  | "FA"
  | "FD"
  | "FF"
  | "FH"
  | "FL"
  | "FR"
  | "FS"
  | "FV"
  | "FW"
  | "GA"
  | "GR"
  | "KC"
  | "KI"
  | "LS"
  | "OB"
  | "PA"
  | "PO"
  | "PY"
  | "RS"
  | "SH"
  | "SK"
  | "SP"
  | "SR"
  | "TO"
  | "UB"
  | "UC"
  | "UF"
  | "UL"
  | "UP"
  | "UR"
  | "US"
  | "WH";
interface _GasMeterPosition extends Primitive._string {
  content: GasMeterPosition;
}

interface _GasMeterReadData extends BaseType {
  IndexValue?: number;
  ReadDate?: Date;
  TypeOfRead?: TypeOfRead;
}
export interface GasMeterReadData extends _GasMeterReadData {
  constructor: { new (): GasMeterReadData };
}
export var GasMeterReadData: { new (): GasMeterReadData };

/** Schema - Gas */
export type GasMeterReadFrequency =
  | "Bi Monthly"
  | "Monthly"
  | "Quarterly"
  | "Daily";
interface _GasMeterReadFrequency extends Primitive._string {
  content: GasMeterReadFrequency;
}

/** Schema - Gas */
interface _GasMeterStandingData extends BaseType {
  BasicMeter?: GasBasicMeterStandingData;
  IntervalMeter?: GasIntervalMeterStandingData;
  MeterRead?: GasMeterStandingDataMeterReadType;
  MeterSerialNumber?: string;
  MeterStatus?: GasMeterStatus;
  MeterTypeSizeCode?: string;
  PressureCorrectionFactor?: number;
  SupplyPointCode?: SupplyPointCode;
}
export interface GasMeterStandingData extends _GasMeterStandingData {
  constructor: { new (): GasMeterStandingData };
}
export var GasMeterStandingData: { new (): GasMeterStandingData };

interface _GasMeterStandingDataMeterReadType extends BaseType {
  Current?: GasMeterReadData;
  Previous?: GasMeterReadData;
}
interface GasMeterStandingDataMeterReadType
  extends _GasMeterStandingDataMeterReadType {
  constructor: { new (): GasMeterStandingDataMeterReadType };
}

export type GasMeterStatus =
  | "No meter"
  | "Turned on"
  | "Turned off"
  | "Plugged"
  | "Trailer AC"
  | "No Reg";
interface _GasMeterStatus extends Primitive._string {
  content: GasMeterStatus;
}

/** Schema - Gas */
export type GasMeterTypeSizeCode = string;
type _GasMeterTypeSizeCode = Primitive._string;

/** Schema - MeterDataManagement */
interface _GasMeterVerifyRequestData extends _NMITransactionBase {
  version?: r17;
  CurrentRead: GasMeterReadData;
  InitiatorReferenceNumber: string;
  InvestigationCode: IndexInvestigationCode;
  InvestigationDescription?: string;
  ProposedRead?: GasMeterReadData;
}
export interface GasMeterVerifyRequestData extends _GasMeterVerifyRequestData {
  constructor: { new (): GasMeterVerifyRequestData };
}
export var GasMeterVerifyRequestData: { new (): GasMeterVerifyRequestData };

type GasMeterVerifyRequestDataInvestigationDescriptionType = string;
type _GasMeterVerifyRequestDataInvestigationDescriptionType = Primitive._string;

/** Schema - MeterDataManagement This type has MeterSerialNumber as a mandatory element */
interface _GasMeterVerifyRequestWithMSNData extends _NMITransactionBase {
  version?: r34;
  CurrentRead: GasMeterReadData;
  InitiatorReferenceNumber: string;
  InvestigationCode: IndexInvestigationCode;
  InvestigationDescription?: string;
  MeterSerialNumber: string;
  ProposedRead?: GasMeterReadData;
}
export interface GasMeterVerifyRequestWithMSNData
  extends _GasMeterVerifyRequestWithMSNData {
  constructor: { new (): GasMeterVerifyRequestWithMSNData };
}
export var GasMeterVerifyRequestWithMSNData: {
  new (): GasMeterVerifyRequestWithMSNData;
};

type GasMeterVerifyRequestWithMSNDataInvestigationDescriptionType = string;
type _GasMeterVerifyRequestWithMSNDataInvestigationDescriptionType =
  Primitive._string;

/** Schema - MeterDataManagement */
interface _GasMeterVerifyResponseData extends _NMITransactionBase {
  version?: r13;
  AdjustmentReasonCode: IndexAdjustmentReasonCode;
  Event?: Event[];
  InitiatorReferenceNumber: string;
  RevisedRead: GasMeterReadData;
}
export interface GasMeterVerifyResponseData
  extends _GasMeterVerifyResponseData {
  constructor: { new (): GasMeterVerifyResponseData };
}
export var GasMeterVerifyResponseData: { new (): GasMeterVerifyResponseData };

/** Schema - MeterDataManagement */
interface _GasMeterVerifyResponseWithMSNData extends _NMITransactionBase {
  version?: r34;
  AdjustmentReasonCode: IndexAdjustmentReasonCode;
  Event?: Event[];
  InitiatorReferenceNumber: string;
  MeterSerialNumber: string;
  RevisedRead: GasMeterReadData;
}
export interface GasMeterVerifyResponseWithMSNData
  extends _GasMeterVerifyResponseWithMSNData {
  constructor: { new (): GasMeterVerifyResponseWithMSNData };
}
export var GasMeterVerifyResponseWithMSNData: {
  new (): GasMeterVerifyResponseWithMSNData;
};

/** Basic standing data associated with a gas NMI. */
interface _GasMultiMeterMasterStandingDataType extends BaseType {
  AnticipatedAnnualConsumption?: number;
  AustralianPostCode?: string;
  BaseLoad?: number;
  ChargeableDemand?: number;
  CustomerCharacterisation?: CustomerCharacterisation;
  CustomerClassificationCode?: string;
  CustomerThresholdCode?: string;
  Distance?: number;
  DistributionTariff?: DistributionTariff;
  HeatingValueZone?: string;
  MIRNAssignmentDate?: Date;
  MIRNCommissionedDate?: Date;
  MIRNStatus?: MIRNStatus;
  NetworkID?: string;
  NetworkReceiptPointID?: string;
  NetworkTariffCode?: string;
  PrimaryCustodyTransferMeter?: NMIWithChecksum;
  SmallUseCustomer?: boolean;
  TemperatureSensitivityFactor?: number;
  TransmissionZone?: number;
}
export interface GasMultiMeterMasterStandingDataType
  extends _GasMultiMeterMasterStandingDataType {
  constructor: { new (): GasMultiMeterMasterStandingDataType };
}
export var GasMultiMeterMasterStandingDataType: {
  new (): GasMultiMeterMasterStandingDataType;
};

/** Read data for NSW/ACT Gas NMI. */
interface _GasMultiMeterReadDataType extends _BaseMultiMeterReadDataType {
  AverageHeatingValue?: number;
  PressureCorrectionFactor?: number;
  VolumeFlow?: number;
}
export interface GasMultiMeterReadDataType extends _GasMultiMeterReadDataType {
  constructor: { new (): GasMultiMeterReadDataType };
}
export var GasMultiMeterReadDataType: { new (): GasMultiMeterReadDataType };

/** Standing data associated with a multimeter gas NMI. */
interface _GasMultiMeterStandingData extends _NMIStandingData {
  version?: r40;
  AdditionalDataToFollow?: boolean;
  MasterData?: GasMultiMeterMasterStandingDataType;
  MeterData?: GasMultiMeterStandingDataMeterDataType;
  RoleAssignments?: RoleAssignments;
  SiteData?: ServicePoint;
}
export interface GasMultiMeterStandingData extends _GasMultiMeterStandingData {
  constructor: { new (): GasMultiMeterStandingData };
}
export var GasMultiMeterStandingData: { new (): GasMultiMeterStandingData };

interface _GasMultiMeterStandingDataMeterDataType extends BaseType {
  Meter: GasMultiMeterStandingDataType[];
}
interface GasMultiMeterStandingDataMeterDataType
  extends _GasMultiMeterStandingDataMeterDataType {
  constructor: { new (): GasMultiMeterStandingDataMeterDataType };
}

/** Standing data associated with a NSW/ACT Gas NMI (DPI). */
interface _GasMultiMeterStandingDataType extends BaseType {
  AdjustmentReasonCode?: string;
  BasicMeter?: GasBasicMultiMeterStandingData;
  BillingMethod?: BillingMethodType;
  IntervalMeter?: GasIntervalMeterStandingData;
  KPAValue?: number;
  MeterInstallationType?: MeterInstallationType;
  MeterMeasurementUnit?: MeterMeasurementUnitType;
  MeterMultiplier?: string;
  MeterPosition?: GasMeterPosition;
  MeterRead?: GasMultiMeterStandingDataTypeMeterReadType;
  MeterReadFrequency?: GasMeterReadFrequency;
  MeterReadFrequencyType?: MeterReadingFrequencyType;
  MeterSerialNumber?: string;
  MeterStatus?: GasMeterStatus;
  MeterType?: MeterType;
  MeterTypeSizeCode?: string;
  MeterUnits?: string;
  NumberOfDialsOnDevice?: number;
  ScheduledReadingDayNumber?: number;
  SupplyPointCode?: SupplyPointCode;
  SupplyPointID?: string;
}
export interface GasMultiMeterStandingDataType
  extends _GasMultiMeterStandingDataType {
  constructor: { new (): GasMultiMeterStandingDataType };
}
export var GasMultiMeterStandingDataType: {
  new (): GasMultiMeterStandingDataType;
};

interface _GasMultiMeterStandingDataTypeMeterReadType extends BaseType {
  Current?: BaseMultiMeterReadDataType;
  Previous?: BaseMultiMeterReadDataType;
}
interface GasMultiMeterStandingDataTypeMeterReadType
  extends _GasMultiMeterStandingDataTypeMeterReadType {
  constructor: { new (): GasMultiMeterStandingDataTypeMeterReadType };
}

type GasMultiMeterStandingDataTypeNumberOfDialsOnDeviceType = number;
type _GasMultiMeterStandingDataTypeNumberOfDialsOnDeviceType =
  Primitive._number;

interface _GasMultiMeterStandingDataUpdate extends _GasMultiMeterStandingData {
  DataChangeReasonCode?: GasMultiMeterStandingDataUpdateDataChangeReasonCodeType;
  LastModifiedBy?: PartyIdentifier;
  LastModifiedDateTime: Date;
}
export interface GasMultiMeterStandingDataUpdate
  extends _GasMultiMeterStandingDataUpdate {
  constructor: { new (): GasMultiMeterStandingDataUpdate };
}
export var GasMultiMeterStandingDataUpdate: {
  new (): GasMultiMeterStandingDataUpdate;
};

interface _GasMultiMeterStandingDataUpdateDataChangeReasonCodeType
  extends _DataChangeReasonCode {
  description: string;
}
interface GasMultiMeterStandingDataUpdateDataChangeReasonCodeType
  extends _GasMultiMeterStandingDataUpdateDataChangeReasonCodeType {
  constructor: {
    new (): GasMultiMeterStandingDataUpdateDataChangeReasonCodeType;
  };
}

interface _GasNewConnection extends BaseType {
  CustomerCharacterisation: CustomerCharacterisation;
}
export interface GasNewConnection extends _GasNewConnection {
  constructor: { new (): GasNewConnection };
}
export var GasNewConnection: { new (): GasNewConnection };

/** NOMD:Agency Nominated, NCON:Nomination Confirmed, NWDN:Nomination Withdrawn, WCON:Nomination Withdrawn Confirmed */
export type GasNominationStatusType = "NOMD" | "NCON" | "NWDN" | "WCON";
interface _GasNominationStatusType extends Primitive._string {
  content: GasNominationStatusType;
}

interface _GasRetrieveRequestData extends _WholesaleRetrieveRequestData {
  contextType: GasRetrieveTransactionType;
  version?: r30;
  AgencyConfirmationSearch: GasAgencyConfirmationSearchType;
  AgencyNominationHeaderId: number;
  AgencyNominationId: number;
  AgencyNominationSearch: GasAgencyNominationSearchType;
  AmdqNominationHeaderId: number;
  AmdqNominationSearch: GasAmdqNominationSearchType;
  BidId: number;
  BidSearch: GasBidSearchType;
  BidSetId: number;
  ForecastId: number;
  ForecastSearch: GasForecastSearchType;
  ForecastValidation: GasForecastValidationType;
  InjectionNominationHeaderId: number;
  InjectionNominationSearch: GasInjectionNominationSearchType;
}
export interface GasRetrieveRequestData extends _GasRetrieveRequestData {
  constructor: { new (): GasRetrieveRequestData };
}
export var GasRetrieveRequestData: { new (): GasRetrieveRequestData };

interface _GasRetrieveResponseData extends _WholesaleRetrieveResponseData {
  contextType: GasRetrieveTransactionType;
  version?: r31;
  AgencyConfirmation: GasAgencyConfirmationHeaderType;
  AgencyNomination: GasAgencyNomHeaderType;
  AgencyNominationDetail: GasAgencyNomDetailType;
  AmdqNomination: GasANType;
  Bid: GasBidType;
  BidSet: GasBidSetType;
  Forecast: GasForecastType;
  ForecastValidationValues: GasForecastValuesType;
  InjectionNomination: GasIHNType;
}
export interface GasRetrieveResponseData extends _GasRetrieveResponseData {
  constructor: { new (): GasRetrieveResponseData };
}
export var GasRetrieveResponseData: { new (): GasRetrieveResponseData };

export type GasRetrieveTransactionType =
  | "Bid"
  | "BidSet"
  | "BidSetCGD"
  | "Forecast"
  | "ForecastCGD"
  | "ForecastValidation"
  | "InjectionNomination"
  | "InjectionNominationCGD"
  | "AgencyNominationHeader"
  | "AgencyNominationDetail"
  | "AgencyConfirmationHeader"
  | "AmdqNomination"
  | "AmdqNominationCGD";
interface _GasRetrieveTransactionType extends Primitive._string {
  content: GasRetrieveTransactionType;
}

interface _GasSearchRequestData extends _WholesaleSearchRequestData {
  contextType: GasSearchTransactionType;
  version?: r30;
  AgencyConfirmationSearch: GasAgencyConfirmationSearchType;
  AgencyNominationSearch: GasAgencyNominationSearchType;
  AmdqNominationSearch: GasAmdqNominationSearchType;
  BidSearch: GasBidSearchType;
  ForecastSearch: GasForecastSearchType;
  InjectionNominationSearch: GasInjectionNominationSearchType;
}
export interface GasSearchRequestData extends _GasSearchRequestData {
  constructor: { new (): GasSearchRequestData };
}
export var GasSearchRequestData: { new (): GasSearchRequestData };

interface _GasSearchResponseData extends _WholesaleSearchResponseData {
  contextType: GasSearchTransactionType;
  version?: r31;
  AgencyConfirmations: GasAgencyConfirmationsType;
  AgencyNominations: GasAgencyNominationsType;
  AmdqCGD: GasANType;
  AmdqNominations: GasAmdqNominationsType;
  Bids: GasBidsType;
  BidSetCGD: GasBidSetType;
  ForecastCGD: GasForecastType;
  Forecasts: GasForecastsType;
  InjectionCGD: GasIHNType;
  InjectionNominations: GasInjectionNominationsType;
}
export interface GasSearchResponseData extends _GasSearchResponseData {
  constructor: { new (): GasSearchResponseData };
}
export var GasSearchResponseData: { new (): GasSearchResponseData };

export type GasSearchTransactionType =
  | "Bid"
  | "Forecast"
  | "InjectionNomination"
  | "AgencyNomination"
  | "AgencyConfirmation"
  | "AmdqNomination";
interface _GasSearchTransactionType extends Primitive._string {
  content: GasSearchTransactionType;
}

interface _GasServiceDetails extends BaseType {
  LoadDetails: LoadDetails;
  MeterFix?: GasMeterFix;
  MeterInletPressure?: number;
  NewConnection?: GasNewConnection;
}
export interface GasServiceDetails extends _GasServiceDetails {
  constructor: { new (): GasServiceDetails };
}
export var GasServiceDetails: { new (): GasServiceDetails };

type GasServiceDetailsMeterInletPressureType = number;
type _GasServiceDetailsMeterInletPressureType = Primitive._number;

/** Schema - Gas */
interface _GasServiceOrderDetails extends _ServiceOrderRequestData {
  version?: r36;
  ConnectionType?: GasConnectionType;
  DateTimeCSRAccessedRecord: Date;
  DateTimeCSRProcessedTransaction: Date;
  QuoteReference?: string;
  ServiceDetails?: GasServiceDetails;
}
export interface GasServiceOrderDetails extends _GasServiceOrderDetails {
  constructor: { new (): GasServiceOrderDetails };
}
export var GasServiceOrderDetails: { new (): GasServiceOrderDetails };

/** Schema - Gas */
interface _GasServiceOrderNotificationData
  extends _ServiceOrderNotificationData {
  version?: r40;
  JobCompletionCodes?: ServiceOrderGasJobCompletionCodes;
  NoAccess: ServiceOrderGasNoAccessData;
  ServiceOrderCompletion: ServiceOrderGasCompletionData;
}
export interface GasServiceOrderNotificationData
  extends _GasServiceOrderNotificationData {
  constructor: { new (): GasServiceOrderNotificationData };
}
export var GasServiceOrderNotificationData: {
  new (): GasServiceOrderNotificationData;
};

interface _GasServiceOrderType extends _ServiceOrderTypeBase {
  version?: r40;
  JobEnquiryCode: JobEnquiryCode;
  MeterSerialNumber?: string;
  SpecialReadReasonCode: SpecialReadReasonCode;
}
export interface GasServiceOrderType extends _GasServiceOrderType {
  constructor: { new (): GasServiceOrderType };
}
export var GasServiceOrderType: { new (): GasServiceOrderType };

/** Schema - MeterDataManagement */
interface _GasSingleHistoryRequestData extends _NMITransactionBase {
  version?: r9;
  FullHistoryRequired: boolean;
  RequestPeriod: Period;
}
export interface GasSingleHistoryRequestData
  extends _GasSingleHistoryRequestData {
  constructor: { new (): GasSingleHistoryRequestData };
}
export var GasSingleHistoryRequestData: { new (): GasSingleHistoryRequestData };

/** Schema - Gas */
interface _GasSpecialReadNoAccess extends BaseType {
  NextAvailableReadDate: Date;
  ReasonForNoAccess: ReasonForNoAccess;
}
export interface GasSpecialReadNoAccess extends _GasSpecialReadNoAccess {
  constructor: { new (): GasSpecialReadNoAccess };
}
export var GasSpecialReadNoAccess: { new (): GasSpecialReadNoAccess };

/** Standing data associated with an gas NMI. */
interface _GasStandingData extends _NMIStandingData {
  version?: r40;
  AdditionalDataToFollow?: boolean;
  MasterData?: GasMasterStandingData;
  MeterData?: GasMeterStandingData;
  RoleAssignments?: RoleAssignments;
  SiteData?: ServicePoint;
}
export interface GasStandingData extends _GasStandingData {
  constructor: { new (): GasStandingData };
}
export var GasStandingData: { new (): GasStandingData };

interface _GasStandingDataUpdate extends _GasStandingData {
  DataChangeReasonCode?: GasStandingDataUpdateDataChangeReasonCodeType;
  LastModifiedBy?: PartyIdentifier;
  LastModifiedDateTime: Date;
}
export interface GasStandingDataUpdate extends _GasStandingDataUpdate {
  constructor: { new (): GasStandingDataUpdate };
}
export var GasStandingDataUpdate: { new (): GasStandingDataUpdate };

interface _GasStandingDataUpdateDataChangeReasonCodeType
  extends _DataChangeReasonCode {
  description: string;
}
interface GasStandingDataUpdateDataChangeReasonCodeType
  extends _GasStandingDataUpdateDataChangeReasonCodeType {
  constructor: { new (): GasStandingDataUpdateDataChangeReasonCodeType };
}

export type GasSubmissionTransactionType =
  | "Bid"
  | "Forecast"
  | "ForecastValidation"
  | "InjectionNomination"
  | "AgencyNomination"
  | "AgencyNominationConfirmation"
  | "AgencyWithdrawnNominationConfirmed"
  | "AgencyNominationWithdraw"
  | "AmdqNomination";
interface _GasSubmissionTransactionType extends Primitive._string {
  content: GasSubmissionTransactionType;
}

export type GasSubmissionType =
  | "Current Day"
  | "Day Plus One"
  | "Day Plus Two"
  | "Standing";
interface _GasSubmissionType extends Primitive._string {
  content: GasSubmissionType;
}

interface _GasSubmitRequestData extends _WholesaleSubmitRequestData {
  applyTo?: GasSubmissionType;
  contextType: GasSubmissionTransactionType;
  version?: r31;
  AgencyNomination: GasAgencyNomHeaderType;
  AgencyNominationConfirmation: GasAgencyConfirmationType;
  AgencyNominationWithdraw: GasAgencyConfirmationType;
  AgencyWithdrawnNominationConfirmed: GasAgencyConfirmationType;
  AmdqNomination: GasANType;
  BidSet: GasBidSetType;
  Forecast: GasForecastType;
  ForecastValidation: GasForecastValidationType;
  InjectionNomination: GasIHNType;
}
export interface GasSubmitRequestData extends _GasSubmitRequestData {
  constructor: { new (): GasSubmitRequestData };
}
export var GasSubmitRequestData: { new (): GasSubmitRequestData };

interface _GasSubmitResponseData extends _WholesaleSubmitResponseData {
  applyTo?: GasSubmissionType;
  contextType: GasSubmissionTransactionType;
  version?: r31;
  AgencyNomination: GasAgencyNomHeaderType;
  AgencyNominationConfirmation: GasAgencyConfirmationHeaderType;
  AgencyNominationWithdraw: GasAgencyNomHeaderType;
  AgencyWithdrawnNominationConfirmed: GasAgencyConfirmationHeaderType;
  AmdqNomination: GasANType;
  BidSet: GasBidSetType;
  Forecast: GasForecastType;
  InjectionNomination: GasIHNType;
  Success: boolean;
}
export interface GasSubmitResponseData extends _GasSubmitResponseData {
  constructor: { new (): GasSubmitResponseData };
}
export var GasSubmitResponseData: { new (): GasSubmitResponseData };

/** Indicates whether the meter is configured to measure the import of energy
 * Version 1.0 additions
 * - Net
 * - Gross
 * - None */
export type GenerationType = "Net" | "Gross" | "None";
interface _GenerationType extends Primitive._string {
  content: GenerationType;
}

/** Purpose - Generic Report Parameters for a MDMT and CATS  Reports
 * Report Name -
 * MSATS Report - */
interface _GenericReportParameters extends _BaseReportParameters {
  version?: r22;
  Parameters?: ReportParametersType;
}
export interface GenericReportParameters extends _GenericReportParameters {
  constructor: { new (): GenericReportParameters };
}
export var GenericReportParameters: { new (): GenericReportParameters };

/** Purpose - Define the Geocoded National Address File (G-NAF) Persistent Identifier (PID) for a given address */
export type GeocodedNationalAddressFilePersistentIdentifier = string;
type _GeocodedNationalAddressFilePersistentIdentifier = Primitive._string;

/** Purpose - Coordinates specification */
interface _GeographicCoordinate extends BaseType {
  Latitude: number;
  Longitude: number;
}
export interface GeographicCoordinate extends _GeographicCoordinate {
  constructor: { new (): GeographicCoordinate };
}
export var GeographicCoordinate: { new (): GeographicCoordinate };

/** Purpose - container for group members */
interface _GroupMembers extends BaseType {
  GroupMember: PartyIdentifier[];
}
export interface GroupMembers extends _GroupMembers {
  constructor: { new (): GroupMembers };
}
export var GroupMembers: { new (): GroupMembers };

/** Purpose - Network charge record type - "400" - GSL */
interface _GSL extends _BaseChargeItem {
  version?: r11;
  Code: string;
  Description: string;
}
export interface GSL extends _GSL {
  constructor: { new (): GSL };
}
export var GSL: { new (): GSL };

type GSLCodeType = string;
type _GSLCodeType = Primitive._string;

interface _GSTData extends BaseType {
  Amount?: number;
  Indicator?: boolean;
}
export interface GSTData extends _GSTData {
  constructor: { new (): GSTData };
}
export var GSTData: { new (): GSTData };

/** Purpose - Defines the GST related details of the Retailer used in the Tax Invoice */
interface _GSTDetails extends BaseType {
  ABN: string;
  BusinessName: string;
}
export interface GSTDetails extends _GSTDetails {
  constructor: { new (): GSTDetails };
}
export var GSTDetails: { new (): GSTDetails };

type GSTDetailsABNType = string;
type _GSTDetailsABNType = Primitive._string;

type GSTDetailsBusinessNameType = string;
type _GSTDetailsBusinessNameType = Primitive._string;

/** Purpose - To define a list of valid hazard codes.  No codes currently defined */
export type HazardCode = string;
type _HazardCode = Primitive._string;

export type HazardDescription = string;
type _HazardDescription = Primitive._string;

/** Purpose - Define the contents of the aseXML message header
 * Detail - Every aseXML message carries a header. It is used to indicate information pertaining to the message as a whole.
 * When not provided, a default value of NEM will be assumed for the market. */
interface _Header extends BaseType {
  From: PartyIdentifier;
  Market?: EnergyMarket;
  MessageDate: Date;
  MessageID: string;
  Priority?: TransactionPriority;
  SecurityContext?: string;
  To: PartyIdentifier;
  TransactionGroup: TransactionGroup;
}
export interface Header extends _Header {
  constructor: { new (): Header };
}
export var Header: { new (): Header };

/** Allows to specify the energy type abbreviation used in formulae to calculate the provided Energy Quantity. */
interface _HeatingDegreeType extends _EnergyQuantity {
  zone: string;
}
export interface HeatingDegreeType extends _HeatingDegreeType {
  constructor: { new (): HeatingDegreeType };
}
export var HeatingDegreeType: { new (): HeatingDegreeType };

/** Schema - Gas */
export type HeatingValueZone = string;
type _HeatingValueZone = Primitive._string;

/** Used to identify the maximum and minimum expected consumption between readings. */
interface _HighLowConsumption extends BaseType {
  High: number;
  Low: number;
}
export interface HighLowConsumption extends _HighLowConsumption {
  constructor: { new (): HighLowConsumption };
}
export var HighLowConsumption: { new (): HighLowConsumption };

/** Allows to specify the hour for which the Energy Quantity is specified. */
interface _HourlyQuantityType extends _EnergyQuantity {
  hour: number;
}
export interface HourlyQuantityType extends _HourlyQuantityType {
  constructor: { new (): HourlyQuantityType };
}
export var HourlyQuantityType: { new (): HourlyQuantityType };

export type HSMCompression = "7Zip" | "BZip2" | "Rar" | "Zip";
interface _HSMCompression extends Primitive._string {
  content: HSMCompression;
}

interface _HSMComtradeText extends BaseType {
  Configuration: string;
  Data: string;
  Header?: string;
}
export interface HSMComtradeText extends _HSMComtradeText {
  constructor: { new (): HSMComtradeText };
}
export var HSMComtradeText: { new (): HSMComtradeText };

interface _HSMContinuousMonitorData extends _HSMMonitorData {
  EndTime: Date;
  StartTime: Date;
}
export interface HSMContinuousMonitorData extends _HSMContinuousMonitorData {
  constructor: { new (): HSMContinuousMonitorData };
}
export var HSMContinuousMonitorData: { new (): HSMContinuousMonitorData };

export type HSMData = "Continuous" | "Triggered" | "Waveform";
interface _HSMData extends Primitive._string {
  content: HSMData;
}

interface _HSMDataInventoryRequest extends BaseType {
  version?: r26;
  RequestData: HSMDataInventoryRequestData;
}
export interface HSMDataInventoryRequest extends _HSMDataInventoryRequest {
  constructor: { new (): HSMDataInventoryRequest };
}
export var HSMDataInventoryRequest: { new (): HSMDataInventoryRequest };

interface _HSMDataInventoryRequestData extends BaseType {}
export interface HSMDataInventoryRequestData
  extends _HSMDataInventoryRequestData {
  constructor: { new (): HSMDataInventoryRequestData };
}
export var HSMDataInventoryRequestData: { new (): HSMDataInventoryRequestData };

interface _HSMDataInventoryResponse extends BaseType {
  vendorSoftwareVersion: string;
  version?: r26;
  Event: Event;
  ResponseData: HSMDataInventoryResponseData;
}
export interface HSMDataInventoryResponse extends _HSMDataInventoryResponse {
  constructor: { new (): HSMDataInventoryResponse };
}
export var HSMDataInventoryResponse: { new (): HSMDataInventoryResponse };

interface _HSMDataInventoryResponseData extends BaseType {}
export interface HSMDataInventoryResponseData
  extends _HSMDataInventoryResponseData {
  constructor: { new (): HSMDataInventoryResponseData };
}
export var HSMDataInventoryResponseData: {
  new (): HSMDataInventoryResponseData;
};

export type HSMEID = number;
type _HSMEID = Primitive._number;

export type HSMFormat = "COMTRADE Configuration" | "COMTRADE Data";
interface _HSMFormat extends Primitive._string {
  content: HSMFormat;
}

export type HSMID = string;
type _HSMID = _NonZeroLengthString;

interface _HSMMonitorCapabilities extends BaseType {
  MonitorCapability: HSMMonitorCapability[];
}
export interface HSMMonitorCapabilities extends _HSMMonitorCapabilities {
  constructor: { new (): HSMMonitorCapabilities };
}
export var HSMMonitorCapabilities: { new (): HSMMonitorCapabilities };

interface _HSMMonitorCapability extends _HSMMonitorIdentity {
  capabilityDate: Date;
  MonitorChannels: HSMMonitorChannels;
}
export interface HSMMonitorCapability extends _HSMMonitorCapability {
  constructor: { new (): HSMMonitorCapability };
}
export var HSMMonitorCapability: { new (): HSMMonitorCapability };

interface _HSMMonitorChannel extends BaseType {
  EID: number;
  Index: number;
  Name: string;
  Plant: HSMPlant;
  Quantity: HSMQuantity;
}
export interface HSMMonitorChannel extends _HSMMonitorChannel {
  constructor: { new (): HSMMonitorChannel };
}
export var HSMMonitorChannel: { new (): HSMMonitorChannel };

type HSMMonitorChannelIndexType = number;
type _HSMMonitorChannelIndexType = Primitive._number;

interface _HSMMonitorChannels extends BaseType {
  MonitorChannel: HSMMonitorChannel[];
}
export interface HSMMonitorChannels extends _HSMMonitorChannels {
  constructor: { new (): HSMMonitorChannels };
}
export var HSMMonitorChannels: { new (): HSMMonitorChannels };

interface _HSMMonitorData extends _HSMMonitorIdentity {
  CapabilityDate: Date;
  ComtradeCompressed: HSMMonitorDataComtradeCompressedType;
  ComtradeText: HSMComtradeText;
  MonitorStatus: HSMStatus;
}
export interface HSMMonitorData extends _HSMMonitorData {
  constructor: { new (): HSMMonitorData };
}
export var HSMMonitorData: { new (): HSMMonitorData };

interface _HSMMonitorDataComtradeCompressedType extends Primitive._string {
  format: HSMCompression;
}
interface HSMMonitorDataComtradeCompressedType
  extends _HSMMonitorDataComtradeCompressedType {
  constructor: { new (): HSMMonitorDataComtradeCompressedType };
}

interface _HSMMonitorDataRequest extends BaseType {
  version?: r21;
  RequestData: HSMMonitorDataRequestData;
}
export interface HSMMonitorDataRequest extends _HSMMonitorDataRequest {
  constructor: { new (): HSMMonitorDataRequest };
}
export var HSMMonitorDataRequest: { new (): HSMMonitorDataRequest };

interface _HSMMonitorDataRequestData extends BaseType {}
export interface HSMMonitorDataRequestData extends _HSMMonitorDataRequestData {
  constructor: { new (): HSMMonitorDataRequestData };
}
export var HSMMonitorDataRequestData: { new (): HSMMonitorDataRequestData };

interface _HSMMonitorDataResponse extends BaseType {
  vendorSoftwareVersion: string;
  version?: r26;
  Event: Event;
  ResponseData: HSMMonitorDataResponseData;
}
export interface HSMMonitorDataResponse extends _HSMMonitorDataResponse {
  constructor: { new (): HSMMonitorDataResponse };
}
export var HSMMonitorDataResponse: { new (): HSMMonitorDataResponse };

interface _HSMMonitorDataResponseData extends BaseType {}
export interface HSMMonitorDataResponseData
  extends _HSMMonitorDataResponseData {
  constructor: { new (): HSMMonitorDataResponseData };
}
export var HSMMonitorDataResponseData: { new (): HSMMonitorDataResponseData };

interface _HSMMonitorIdentities extends BaseType {
  MonitorIdentity: HSMMonitorIdentity[];
}
export interface HSMMonitorIdentities extends _HSMMonitorIdentities {
  constructor: { new (): HSMMonitorIdentities };
}
export var HSMMonitorIdentities: { new (): HSMMonitorIdentities };

interface _HSMMonitorIdentity extends BaseType {
  MonitorID: string;
  StationEID: number;
}
export interface HSMMonitorIdentity extends _HSMMonitorIdentity {
  constructor: { new (): HSMMonitorIdentity };
}
export var HSMMonitorIdentity: { new (): HSMMonitorIdentity };

interface _HSMMonitorRollCall extends _HSMMonitorIdentity {
  CurrentMonitorTime: Date;
  EarliestData: Date;
  LastCapabilityUpdate: Date;
  LatestData: Date;
  Status: HSMStatus;
}
export interface HSMMonitorRollCall extends _HSMMonitorRollCall {
  constructor: { new (): HSMMonitorRollCall };
}
export var HSMMonitorRollCall: { new (): HSMMonitorRollCall };

interface _HSMMonitorRollCalls extends BaseType {
  MonitorRollCall: HSMMonitorRollCall[];
}
export interface HSMMonitorRollCalls extends _HSMMonitorRollCalls {
  constructor: { new (): HSMMonitorRollCalls };
}
export var HSMMonitorRollCalls: { new (): HSMMonitorRollCalls };

export type HSMMonitors =
  | "RollCall"
  | "ContinuousCapability"
  | "TriggeredCapability"
  | "WaveformCapability";
interface _HSMMonitors extends Primitive._string {
  content: HSMMonitors;
}

interface _HSMMonitorsRequest extends BaseType {
  version?: r21;
  RequestData: HSMMonitorsRequestData;
}
export interface HSMMonitorsRequest extends _HSMMonitorsRequest {
  constructor: { new (): HSMMonitorsRequest };
}
export var HSMMonitorsRequest: { new (): HSMMonitorsRequest };

interface _HSMMonitorsRequestData extends BaseType {}
export interface HSMMonitorsRequestData extends _HSMMonitorsRequestData {
  constructor: { new (): HSMMonitorsRequestData };
}
export var HSMMonitorsRequestData: { new (): HSMMonitorsRequestData };

interface _HSMMonitorsResponse extends BaseType {
  vendorSoftwareVersion: string;
  version?: r26;
  Event: Event;
  ResponseData: HSMMonitorsResponseData;
}
export interface HSMMonitorsResponse extends _HSMMonitorsResponse {
  constructor: { new (): HSMMonitorsResponse };
}
export var HSMMonitorsResponse: { new (): HSMMonitorsResponse };

interface _HSMMonitorsResponseData extends BaseType {}
export interface HSMMonitorsResponseData extends _HSMMonitorsResponseData {
  constructor: { new (): HSMMonitorsResponseData };
}
export var HSMMonitorsResponseData: { new (): HSMMonitorsResponseData };

export type HSMPlant =
  | "Bus"
  | "Generator"
  | "Load"
  | "Region"
  | "Shunt"
  | "Station"
  | "Static VAR Compensator"
  | "Switch"
  | "Transformer"
  | "Transmission Line"
  | "Zero Impedance Branch";
interface _HSMPlant extends Primitive._string {
  content: HSMPlant;
}

export type HSMQuantity =
  | "Voltage Angle Blue"
  | "Voltage Angle Positive Sequence"
  | "Voltage Angle Red"
  | "Voltage Angle White"
  | "Frequency"
  | "Power Blue"
  | "Power Red"
  | "Power Three Phase"
  | "Power White"
  | "Reactive Power Blue"
  | "Reactive Power Red"
  | "Reactive Power Three Phase"
  | "Reactive Power White"
  | "Voltage Blue"
  | "Voltage Positive Sequence"
  | "Voltage Red"
  | "Voltage White"
  | "Current Red"
  | "Current White"
  | "Current Blue"
  | "Current Angle Red"
  | "Current Angle Blue"
  | "Current Angle White";
interface _HSMQuantity extends Primitive._string {
  content: HSMQuantity;
}

export type HSMStatus = "Offline" | "Synchronised" | "Unsynchronised";
interface _HSMStatus extends Primitive._string {
  content: HSMStatus;
}

interface _HSMTrigger extends _HSMMonitorIdentity {
  ChangeRateDenominatorUnit: string;
  ChangeRateValue: number;
  Description: string;
  MonitorChannelIndex: number;
  OverValue: number;
  PostFaultLength: number;
  PreFaultLength: number;
  Quantity: HSMQuantity;
  TriggerID: string;
  UnderValue: number;
  WindowMaxValue: number;
  WindowMinValue: number;
}
export interface HSMTrigger extends _HSMTrigger {
  constructor: { new (): HSMTrigger };
}
export var HSMTrigger: { new (): HSMTrigger };

interface _HSMTriggeredEvent extends _HSMMonitorIdentity {
  FaultTime: Date;
  LastBlockNumber: number;
  TriggerID: string[];
}
export interface HSMTriggeredEvent extends _HSMTriggeredEvent {
  constructor: { new (): HSMTriggeredEvent };
}
export var HSMTriggeredEvent: { new (): HSMTriggeredEvent };

interface _HSMTriggeredEvents extends BaseType {
  TriggeredEvent: HSMTriggeredEvent[];
}
export interface HSMTriggeredEvents extends _HSMTriggeredEvents {
  constructor: { new (): HSMTriggeredEvents };
}
export var HSMTriggeredEvents: { new (): HSMTriggeredEvents };

interface _HSMTriggeredMonitorData extends _HSMMonitorData {
  BlockNumber: number;
  FaultTime: Date;
}
export interface HSMTriggeredMonitorData extends _HSMTriggeredMonitorData {
  constructor: { new (): HSMTriggeredMonitorData };
}
export var HSMTriggeredMonitorData: { new (): HSMTriggeredMonitorData };

export type HSMTriggerID = string;
type _HSMTriggerID = _NonZeroLengthString;

type HSMTriggerMonitorChannelIndexType = number;
type _HSMTriggerMonitorChannelIndexType = Primitive._number;

interface _HSMTriggers extends BaseType {
  Trigger: HSMTrigger[];
}
export interface HSMTriggers extends _HSMTriggers {
  constructor: { new (): HSMTriggers };
}
export var HSMTriggers: { new (): HSMTriggers };

interface _HSMTriggersRequest extends BaseType {
  version?: r26;
  RequestData: HSMTriggersRequestData;
}
export interface HSMTriggersRequest extends _HSMTriggersRequest {
  constructor: { new (): HSMTriggersRequest };
}
export var HSMTriggersRequest: { new (): HSMTriggersRequest };

interface _HSMTriggersRequestData extends BaseType {}
export interface HSMTriggersRequestData extends _HSMTriggersRequestData {
  constructor: { new (): HSMTriggersRequestData };
}
export var HSMTriggersRequestData: { new (): HSMTriggersRequestData };

interface _HSMTriggersResponse extends BaseType {
  vendorSoftwareVersion: string;
  version?: r26;
  Event: Event;
  ResponseData: HSMTriggersResponseData;
}
export interface HSMTriggersResponse extends _HSMTriggersResponse {
  constructor: { new (): HSMTriggersResponse };
}
export var HSMTriggersResponse: { new (): HSMTriggersResponse };

interface _HSMTriggersResponseData extends BaseType {}
export interface HSMTriggersResponseData extends _HSMTriggersResponseData {
  constructor: { new (): HSMTriggersResponseData };
}
export var HSMTriggersResponseData: { new (): HSMTriggersResponseData };

export type HSMTriggerValue = number;
type _HSMTriggerValue = Primitive._number;

export type HSMVendorSoftwareVersion = string;
type _HSMVendorSoftwareVersion = Primitive._string;

interface _HubFlowControlAlertNotification extends BaseType {
  version?: r37;
  FlowControlAlerts: FlowControlAlerts;
}
export interface HubFlowControlAlertNotification
  extends _HubFlowControlAlertNotification {
  constructor: { new (): HubFlowControlAlertNotification };
}
export var HubFlowControlAlertNotification: {
  new (): HubFlowControlAlertNotification;
};

interface _HubFlowControlReport extends BaseType {
  version?: r37;
  FlowControlStandingData: FlowControlAlerts;
  RequestParameters?: RequestParameters;
  ResultCount: number;
}
export interface HubFlowControlReport extends _HubFlowControlReport {
  constructor: { new (): HubFlowControlReport };
}
export var HubFlowControlReport: { new (): HubFlowControlReport };

export type HubMessageType =
  | "Transaction Message"
  | "Transaction Acknowledgement"
  | "Message Acknowledgement";
interface _HubMessageType extends Primitive._string {
  content: HubMessageType;
}

interface _HubQueueReport extends BaseType {
  version?: r37;
  MessageDetails: MessageDetails;
  RequestParameters?: RequestParameters;
  ResultCount: number;
}
export interface HubQueueReport extends _HubQueueReport {
  constructor: { new (): HubQueueReport };
}
export var HubQueueReport: { new (): HubQueueReport };

/** Read data for NSW/ACT Hotwater NMI. */
interface _HWMultiMeterReadDataType extends _BaseMultiMeterReadDataType {
  CommonFactor?: number;
  ConsumptionLitres?: number;
}
export interface HWMultiMeterReadDataType extends _HWMultiMeterReadDataType {
  constructor: { new (): HWMultiMeterReadDataType };
}
export var HWMultiMeterReadDataType: { new (): HWMultiMeterReadDataType };

/** A request to trade an imbalance amount */
interface _ImbalanceTradeRequest extends BaseType {
  version?: r34;
  ImbalanceRequestData: ImbalanceTradeRequestImbalanceRequestDataType;
}
export interface ImbalanceTradeRequest extends _ImbalanceTradeRequest {
  constructor: { new (): ImbalanceTradeRequest };
}
export var ImbalanceTradeRequest: { new (): ImbalanceTradeRequest };

interface _ImbalanceTradeRequestImbalanceRequestDataType extends BaseType {
  gasDate: Date;
  networkID: string;
  CounterpartyParticipantID: PartyIdentifier;
  TradedImbalanceAmount: number;
  TradeType: TradeType;
}
interface ImbalanceTradeRequestImbalanceRequestDataType
  extends _ImbalanceTradeRequestImbalanceRequestDataType {
  constructor: { new (): ImbalanceTradeRequestImbalanceRequestDataType };
}

/** Schema - Gas */
export type IndexAdjustmentReasonCode =
  | "Over Read"
  | "Under Read"
  | "Over Estimate"
  | "Under Estimate"
  | "No Change";
interface _IndexAdjustmentReasonCode extends Primitive._string {
  content: IndexAdjustmentReasonCode;
}

/** Schema - Gas */
export type IndexInvestigationCode =
  | "Confirm Reading For Vacant Site"
  | "Confirm Zero Consumption"
  | "Incomplete Data"
  | "Invalid MDFF Data"
  | "Invalid Standing Data"
  | "Missing Datastream"
  | "Require Actual Reading or Substitute"
  | "Require Final Substitute"
  | "Require Latest Version"
  | "Scheduled Reading Required"
  | "Service Order Reading Required"
  | "Verify High Reading"
  | "Verify Low Reading"
  | "Customer Away"
  | "Customer Query"
  | "Customer Read"
  | "High Account"
  | "Zero Consumption"
  | "Recipient Not Responsible For The NMI"
  | "Other"
  | "Cross Meter"
  | "MDL Out of Alignment"
  | "Verify/Missing Register"
  | "Require Estimate Data"
  | "Meter Churn";
interface _IndexInvestigationCode extends Primitive._string {
  content: IndexInvestigationCode;
}

/** Purpose - Defines a list of valid Installation type */
export type InstallationType =
  | "Underground"
  | "Overhead"
  | "Underground To Overhead Mains"
  | "Overhead To Underground Mains"
  | "Transformer Overhead"
  | "Transformer Ground Level";
interface _InstallationType extends Primitive._string {
  content: InstallationType;
}

/** Purpose - Define the structure of Instrument transformer details. */
interface _InstrumentTransformer extends BaseType {
  TransformerNumber?: string;
  TransformerRatio?: string;
  TransformerType?: InstrumentTransformerType;
}
export interface InstrumentTransformer extends _InstrumentTransformer {
  constructor: { new (): InstrumentTransformer };
}
export var InstrumentTransformer: { new (): InstrumentTransformer };

/** Purpose - Parent element for list of instrument transformers. */
interface _InstrumentTransformers extends BaseType {
  InstrumentTransformer: InstrumentTransformer[];
}
export interface InstrumentTransformers extends _InstrumentTransformers {
  constructor: { new (): InstrumentTransformers };
}
export var InstrumentTransformers: { new (): InstrumentTransformers };

export type InstrumentTransformerSerialNumber = string;
type _InstrumentTransformerSerialNumber = Primitive._string;

/** Indicates instrument transformer type for the meter
 * Version 1.0 additions
 * - CT
 * - VT */
export type InstrumentTransformerType = "CT" | "VT";
interface _InstrumentTransformerType extends Primitive._string {
  content: InstrumentTransformerType;
}

/** Purpose - Identify a genericParameterType */
interface _IntegerParameter extends _ReportParameterType {
  Description?: string;
  Value: number;
}
export interface IntegerParameter extends _IntegerParameter {
  constructor: { new (): IntegerParameter };
}
export var IntegerParameter: { new (): IntegerParameter };

/** Purpose - Network charge record type - "900" - InterestCharge */
interface _InterestCharge extends _BaseChargeItem {
  version?: r11;
  OverdueInvoice?: string;
  Period: Period;
  Principal: number;
}
export interface InterestCharge extends _InterestCharge {
  constructor: { new (): InterestCharge };
}
export var InterestCharge: { new (): InterestCharge };

/** Purpose - Define an International address
 * Detail - AS4590 provides differing definitions of some address components depending on whether they are for addresses internal or external to Australia. In order to provide maximum validation of Australian addresses, whilst supporting International formats, aseXML provides different formats for the two.
 *
 * Because of the wide variety of International formats, aseXML currently only defines an unstructured format for Internaitonal addresses. It does, however, follow the same structure as that used for Australian addresses, allowing the definition of structured International addresses in the future.
 *
 * Country and postcode are provided as structured fields , as per AS4590. */
interface _InternationalAddress extends BaseType {
  CountryCode?: string;
  PostCode?: string;
  UnstructuredAddress: InternationalAddressUnstructuredAddressType;
}
export interface InternationalAddress extends _InternationalAddress {
  constructor: { new (): InternationalAddress };
}
export var InternationalAddress: { new (): InternationalAddress };

/** Purpose - Define a line of unstructured International address information
 * Detail - Given the wide variety of international addresses, the aseXML address format currently supports only unstructured international addresses. */
export type InternationalAddressLine = string;
type _InternationalAddressLine = Primitive._string;

interface _InternationalAddressUnstructuredAddressType extends BaseType {
  AddressLine: string[];
}
interface InternationalAddressUnstructuredAddressType
  extends _InternationalAddressUnstructuredAddressType {
  constructor: { new (): InternationalAddressUnstructuredAddressType };
}

/** Purpose - Define International country code as per Australian Standard AS4590 */
export type InternationalCountryCode = string;
type _InternationalCountryCode = Primitive._string;

/** Purpose - Define International postcode as per Australian Standard AS4590
 * Detail - In order to provide better validation of Australian postcodes, the definition for International postcodes has been separated from that of Australian poscodes. */
export type InternationalPostCode = string;
type _InternationalPostCode = Primitive._string;

/** Schema - Gas */
export type IntervalMeterCharge = number;
type _IntervalMeterCharge = Primitive._number;

/** Purpose - Network invoice record type - "021" - InvoiceDetail */
interface _InvoiceDetail extends _BaseInvoice {
  Amount: PaymentData;
  Charge: ChargeType;
  NumberOfTransactions: number;
}
export interface InvoiceDetail extends _InvoiceDetail {
  constructor: { new (): InvoiceDetail };
}
export var InvoiceDetail: { new (): InvoiceDetail };

type InvoiceDetailNumberOfTransactionsType = number;
type _InvoiceDetailNumberOfTransactionsType = Primitive._number;

/** Purpose - defines the footer data type of the network charge items */
interface _InvoiceFooter extends BaseType {
  DetailCount: number;
  SummaryCount: number;
}
export interface InvoiceFooter extends _InvoiceFooter {
  constructor: { new (): InvoiceFooter };
}
export var InvoiceFooter: { new (): InvoiceFooter };

/** Purpose - defines the footer network billing invoice for NSW */
interface _InvoiceNotificationFooter extends BaseType {
  ChargeRecordCount: number;
  InvoiceRecordCount: number;
  Payment: PaymentData;
}
export interface InvoiceNotificationFooter extends _InvoiceNotificationFooter {
  constructor: { new (): InvoiceNotificationFooter };
}
export var InvoiceNotificationFooter: { new (): InvoiceNotificationFooter };

/** Purpose - defines the footer network billing invoice for SA and Victoria */
interface _InvoiceNotificationSummary extends BaseType {
  EventCharge?: ChargeFooter;
  ExcludedService?: ChargeFooter;
  GSL?: ChargeFooter;
  Interest?: ChargeFooter;
  Invoice?: InvoiceFooter;
  NUOS?: ChargeFooter;
}
export interface InvoiceNotificationSummary
  extends _InvoiceNotificationSummary {
  constructor: { new (): InvoiceNotificationSummary };
}
export var InvoiceNotificationSummary: { new (): InvoiceNotificationSummary };

/** Purpose - Defines the invoice number data type */
export type InvoiceNumber = string;
type _InvoiceNumber = Primitive._string;

/** Purpose - Network invoice record type - "020" - InvoiceSummary */
interface _InvoiceSummary extends _BaseInvoice {
  Amount: PaymentData;
  Distributor: GSTDetails;
  DueDate: Date;
  FirstTransactionID?: string;
  GSTStatus: string;
  InvoiceDate: Date;
  LastTransactionID?: string;
  Retailer: GSTDetails;
  TotalNumberOfChargeItems?: number;
  TotalNumberOfDetailRecords?: number;
}
export interface InvoiceSummary extends _InvoiceSummary {
  constructor: { new (): InvoiceSummary };
}
export var InvoiceSummary: { new (): InvoiceSummary };

type InvoiceSummaryGSTStatusType = string;
type _InvoiceSummaryGSTStatusType = Primitive._string;

type InvoiceSummaryTotalNumberOfChargeItemsType = number;
type _InvoiceSummaryTotalNumberOfChargeItemsType = Primitive._number;

type InvoiceSummaryTotalNumberOfDetailRecordsType = number;
type _InvoiceSummaryTotalNumberOfDetailRecordsType = Primitive._number;

/** Schema - Gas */
export type JobEnquiryCode =
  | "AML"
  | "CSL"
  | "CLT"
  | "DFC"
  | "DSD"
  | "EBD"
  | "EBS"
  | "ECO"
  | "EFB"
  | "EMG"
  | "EMT"
  | "EOT"
  | "ESE"
  | "EST"
  | "EXP"
  | "FAP"
  | "FAT"
  | "FHS"
  | "FMN"
  | "FMT"
  | "FSV"
  | "MAP"
  | "MBO"
  | "MCH"
  | "MDM"
  | "MDO"
  | "MFX"
  | "MFXA"
  | "MHA"
  | "MRC"
  | "MRF"
  | "MRG"
  | "MRM"
  | "MRR"
  | "MRT"
  | "MST"
  | "MTE"
  | "MTJ"
  | "MTN"
  | "OTH"
  | "RML"
  | "RSD"
  | "RSR"
  | "SBS"
  | "SCR"
  | "SDR"
  | "SNG"
  | "SPN"
  | "UEF"
  | "UMS"
  | "USR"
  | "AMLB"
  | "AMLC"
  | "AMLI"
  | "AMLM"
  | "AMLN"
  | "AMLU"
  | "DMS"
  | "DSDA"
  | "DSDB"
  | "DSDI"
  | "DSDN"
  | "DSDU"
  | "MRMB"
  | "MRMC"
  | "MRMI"
  | "MRMN"
  | "MRMU"
  | "PRE"
  | "TCI"
  | "TCIB"
  | "TCII"
  | "TCIN"
  | "TCIU"
  | "TCR";
interface _JobEnquiryCode extends Primitive._string {
  content: JobEnquiryCode;
}

/** Purpose - Identify the jurisdictions of relevance to aseXML
 * MSATS Data Model Column - JurisdictionCode */
export type JurisdictionCode = string;
type _JurisdictionCode = Primitive._string;

/** Purpose - Row of the JurisdictionCodes table
 * MSATS Data Model Table - CATS_Jurisdiction_Codes
 * Replication Table Name - JurisdictionCodes */
interface _JurisdictionCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface JurisdictionCodeRow extends _JurisdictionCodeRow {
  constructor: { new (): JurisdictionCodeRow };
}
export var JurisdictionCodeRow: { new (): JurisdictionCodeRow };

/** Purpose - Describe the jurisdictions of relevance to aseXML
 * MSATS Data Model Column - JurisdictionDesc
 * Detail - The description is intended to assist in identification of the correct jurisdiction. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type JurisdictionDescription = string;
type _JurisdictionDescription = Primitive._string;

/** Identifies the type of key and/or location of the key required to access a meter at a site.  This is required in standing data as the Franchise market Retailer still carries responsibility for performing site activities for some areas of the network. */
export type KeyCode = string;
type _KeyCode = Primitive._string;

export type KPAValueType = number;
type _KPAValueType = Primitive._number;

/** Purpose - Provide geographic location coordinate.
 * Detail - Geographic latitude.
 * The angular measurement North or South of the equator in decimal degrees (to 7 decimal places).   Angles South of the equator will be represented as negative values.   Eg -37.8886755 */
export type Latitude = number;
type _Latitude = Primitive._number;

/** Purpose - Defines license data structure for the tradesman performing the service. */
interface _License extends BaseType {
  AttendanceRequired?: boolean;
  BusinessName?: BusinessName;
  DocumentReference?: DocumentReferenceType;
  Licensee?: PersonName;
  LicenseNumber?: string;
  PhoneNumber?: AustralianPhoneNumber[];
  SafetyCertificate?: SafetyCertificateType;
}
export interface License extends _License {
  constructor: { new (): License };
}
export var License: { new (): License };

/** Purpose - Defines the license number as restricted string type */
export type LicenseNumber = string;
type _LicenseNumber = Primitive._string;

interface _LifeSupportData extends BaseType {
  DateRequired?: Date;
  Equipment?: LifeSupportEquipmentType;
  LastModifiedDateTime: Date;
  ManagementContactDetail?: CustomerDetail;
  NMI: NMI;
  PreferredContactMethod?: ContactMethod;
  Reason: UpdateReason;
  RegistrationOwner?: YesNo;
  SiteAddress?: Address;
  SpecialNotes?: SpecialComments;
  Status: LifeSupportStatus;
}
export interface LifeSupportData extends _LifeSupportData {
  constructor: { new (): LifeSupportData };
}
export var LifeSupportData: { new (): LifeSupportData };

/** Purpose - Define the fixed Life support equipment types used in Life Support notification */
export type LifeSupportEquipmentType =
  | "Oxygen Concentrator"
  | "Intermittent Peritoneal Dialysis Machine"
  | "Kidney Dialysis Machine"
  | "Chronic Positive Airways Pressure Respirator"
  | "Crigler Najjar Syndrome Phototherapy Equipment"
  | "Ventilator For Life Support"
  | "Other";
interface _LifeSupportEquipmentType extends Primitive._string {
  content: LifeSupportEquipmentType;
}

/** NEM - B2B Electricity - Fully XML tagged; As adopted - B2B Gas - Fully XML tagged; Transaction Group: CUST; Purpose: Notify change of Life support Details- National Electricity B2B Process - Tranche 1 Build Pack */
interface _LifeSupportNotification extends BaseType {
  version?: r38;
  LifeSupportData: LifeSupportData;
}
export interface LifeSupportNotification extends _LifeSupportNotification {
  constructor: { new (): LifeSupportNotification };
}
export var LifeSupportNotification: { new (): LifeSupportNotification };

/** NEM - B2B Electricity - Fully XML tagged; As adopted - B2B Gas - Fully XML tagged; Transaction Group: CUST; Purpose: Request Life support Details- National Electricity B2B Process - Tranche 1 Build Pack */
interface _LifeSupportRequest extends BaseType {
  version?: r38;
  NMI: NMI;
  Reason: LifeSupportRequestReason;
  SpecialNotes?: SpecialComments;
}
export interface LifeSupportRequest extends _LifeSupportRequest {
  constructor: { new (): LifeSupportRequest };
}
export var LifeSupportRequest: { new (): LifeSupportRequest };

/** Purpose - Define the fixed Life support request reasons for a Life Support Request */
export type LifeSupportRequestReason =
  | "Confirm Life Support"
  | "Data Quality Issue"
  | "No response to rejected LSN"
  | "Other";
interface _LifeSupportRequestReason extends Primitive._string {
  content: LifeSupportRequestReason;
}

/** Purpose - Define the fixed Life support status used in Life Support notification */
export type LifeSupportStatus =
  | "Registered - No Medical Confirmation"
  | "Registered - Medical Confirmation"
  | "Deregistered - No Medical Confirmation"
  | "Deregistered - Customer Advice"
  | "Deregistered - No Customer Response"
  | "None";
interface _LifeSupportStatus extends Primitive._string {
  content: LifeSupportStatus;
}

/** Purpose - Defines the charge item line description type restricted to char(60) */
export type LineDescription = string;
type _LineDescription = Primitive._string;

/** Linepack And Unaccounted For Gas */
interface _LinepackAndUnaccountedForGasNotification extends BaseType {
  version?: r34;
  LinepackAndUnaccountedForGasData: LinepackAndUnaccountedForGasNotificationLinepackAndUnaccountedForGasDataType[];
}
export interface LinepackAndUnaccountedForGasNotification
  extends _LinepackAndUnaccountedForGasNotification {
  constructor: { new (): LinepackAndUnaccountedForGasNotification };
}
export var LinepackAndUnaccountedForGasNotification: {
  new (): LinepackAndUnaccountedForGasNotification;
};

interface _LinepackAndUnaccountedForGasNotificationLinepackAndUnaccountedForGasDataType
  extends BaseType {
  ChangeInLinepack?: number;
  UnaccountedForGas: number;
}
interface LinepackAndUnaccountedForGasNotificationLinepackAndUnaccountedForGasDataType
  extends _LinepackAndUnaccountedForGasNotificationLinepackAndUnaccountedForGasDataType {
  constructor: {
    new (): LinepackAndUnaccountedForGasNotificationLinepackAndUnaccountedForGasDataType;
  };
}

interface _LoadDetails extends BaseType {
  PerAnnum?: number;
  PerHour: number;
}
export interface LoadDetails extends _LoadDetails {
  constructor: { new (): LoadDetails };
}
export var LoadDetails: { new (): LoadDetails };

/** Schema - Gas */
export type LoadDetailsPerAnnum = number;
type _LoadDetailsPerAnnum = Primitive._number;

/** Schema - Gas */
export type LoadDetailsPerHour = number;
type _LoadDetailsPerHour = Primitive._number;

/** Purpose - Provide geographic location coordinate.
 * Detail - Geographic longitude.
 * The angular measurement East or West of the prime meridian in decimal degrees (to 7 decimal places).   Angles East of the Prime Meridian (eg Australia) will be represented as positive values.   Eg +145.1410361 */
export type Longitude = number;
type _Longitude = Primitive._number;

interface _MarketIntervalInfoType extends BaseType {
  CurrentInterval: GasIntervalInfoType;
  NextInterval: GasIntervalInfoType;
}
export interface MarketIntervalInfoType extends _MarketIntervalInfoType {
  constructor: { new (): MarketIntervalInfoType };
}
export var MarketIntervalInfoType: { new (): MarketIntervalInfoType };

/** Application - Reports
 * TransactionExchange - Report Request
 * TransactionGroup - (NSW/ACT Gas Transactions)
 * Priority - Low
 * Purpose - Publish a Report
 * Detail - This is a generic transaction that relies on the details of the exact report format returned being determined by the xsi:type attribute. */
interface _MarketReport extends BaseType {
  version?: r34;
  BlockDetails?: MRBlockParameterType;
  CSVFileName?: string;
  RecordCount?: number;
  ReportDetails: BaseReportFormat;
  ReportID?: string;
  ReportName: MarketReportNamesType;
}
export interface MarketReport extends _MarketReport {
  constructor: { new (): MarketReport };
}
export var MarketReport: { new (): MarketReport };

/** Purpose - Define the Name of any report that accepts CSV Report in the generic CSVReport format.
 * Element MarketReportNames has been restricted to 80 characters.
 *
 * Version 7.0 additions
 * Added MarketReportNamesType for defining Market Report Names */
export type MarketReportNamesType =
  | "DPRExtractRpt"
  | "BasicConsumptionRpt"
  | "MeterReadingToUserRpt"
  | "MeterReadingToUserNonSTTMRpt"
  | "ChangeOfStandingDataRpt"
  | "CustomerChurnRpt"
  | "EstimationResultsToUserRpt"
  | "RevisedEstimationResultsToUserRpt"
  | "ReconciliationResultsRpt"
  | "ForecastingDataRpt"
  | "ApportionmentPercentageRpt"
  | "DailyNSLRpt"
  | "STTMPipelineAllocationDataRpt"
  | "DailyToSTTMRpt"
  | "DailyToUserRpt"
  | "WeeklyToSTTMRpt"
  | "MonthlyToSTTMRpt"
  | "PreMonthlyToSTTMRpt"
  | "FinMonthlyToSTTMRpt"
  | "RevMonthlyToSTTMRpt"
  | "MonthlyToUserRpt"
  | "TotalGasInjectedRpt"
  | "WeeklyToUserRpt"
  | "EstimationResultsToNWORpt"
  | "RevisedEstimationResultsToNWORpt"
  | "MatchedImbalanceTradeRpt"
  | "ExpiredImbalanceTradeRpt"
  | "ParticipantImbalanceAmountRpt"
  | "RevisedImbalanceRpt"
  | "T298NewStreetListingRpt"
  | "T299CompleteMIRNListingRpt"
  | "T900CustomerSiteDetailsMonthlyRpt"
  | "T2125AncillaryChargeListingRpt"
  | "T2130HeatingValueDailyRpt"
  | "T2131PublishedHeatingValueDailyRpt"
  | "T2145HaulageRightsRpt"
  | "T2270TotalCLPRpt"
  | "T2275TotalCLPRpt"
  | "T2305EffectiveDegreeDayRpt"
  | "T2420QuotationStatusRpt"
  | "T2421QuotationSubmissionRpt"
  | "T2422QuotationNotificationRpt"
  | "T2423QuotationAcceptedRpt"
  | "T2424QuotationAvailableRpt";
interface _MarketReportNamesType extends Primitive._string {
  content: MarketReportNamesType;
}

/** Matched Allocation Data from Network Operator */
interface _MatchedAllocationsDataNotification extends BaseType {
  version?: r34;
  MatchedAllocationsData: MatchedAllocationsDataNotificationMatchedAllocationsDataType[];
}
export interface MatchedAllocationsDataNotification
  extends _MatchedAllocationsDataNotification {
  constructor: { new (): MatchedAllocationsDataNotification };
}
export var MatchedAllocationsDataNotification: {
  new (): MatchedAllocationsDataNotification;
};

interface _MatchedAllocationsDataNotificationMatchedAllocationsDataType
  extends BaseType {
  gasDate: Date;
  networkID: string;
  participantID: string;
  Quantity: number;
}
interface MatchedAllocationsDataNotificationMatchedAllocationsDataType
  extends _MatchedAllocationsDataNotificationMatchedAllocationsDataType {
  constructor: {
    new (): MatchedAllocationsDataNotificationMatchedAllocationsDataType;
  };
}

/** Purpose - Definition for IAITMatchedImbalanceTradeRpt
 * Report Details - Notification of a Matched Trade. */
interface _MatchedImbalanceTradeRpt extends _BaseReportFormat {
  MatchedImbalanceData: MatchedImbalanceTradeRptMatchedImbalanceDataType;
}
export interface MatchedImbalanceTradeRpt extends _MatchedImbalanceTradeRpt {
  constructor: { new (): MatchedImbalanceTradeRpt };
}
export var MatchedImbalanceTradeRpt: { new (): MatchedImbalanceTradeRpt };

interface _MatchedImbalanceTradeRptMatchedImbalanceDataType extends BaseType {
  initiatingReceiptID: string;
  networkID: string;
  CumulativeImbalance: number;
}
interface MatchedImbalanceTradeRptMatchedImbalanceDataType
  extends _MatchedImbalanceTradeRptMatchedImbalanceDataType {
  constructor: { new (): MatchedImbalanceTradeRptMatchedImbalanceDataType };
}

/** Purpose - Identify the submission of meter data via a MeterDataNotification transaction
 * Detail - This identifier is assigned via MDM  to each block of data provided via a MeterDataNotification transaction. */
export type MDMActivityIdentifier = number;
type _MDMActivityIdentifier = Primitive._number;

/** Purpose - Allows for selection between 'SecondTierNMIs' and 'AllNMIs' */
export type MDMNMISelectionType = "SecondTierNMIs" | "AllNMIs";
interface _MDMNMISelectionType extends Primitive._string {
  content: MDMNMISelectionType;
}

/** Purpose - Uniquely identify each settlement run */
export type MDMSettlementCaseIdentifier = number;
type _MDMSettlementCaseIdentifier = Primitive._number;

/** Purpose - Identify settlement run type: PRELIM, FINAL, REV1 etc. */
export type MDMSettlementRunType =
  | "RREV2"
  | "RREV1"
  | "SPECIAL"
  | "PRELIMINARY"
  | "FINAL";
interface _MDMSettlementRunType extends Primitive._string {
  content: MDMSettlementRunType;
}

/** Purpose - Parameter definition for an Actual vs Estimate Data Report
 * Report Name - ActualvsEstimate
 * MSATS Report - RM9 */
interface _MDMTActualvsEstimateReportParameters extends _BaseReportParameters {
  AsAtDate: Date;
  DataType?: string;
  FromDate: Date;
  LastSequenceNumber?: number;
  MDP?: PartyIdentifier;
  ToDate: Date;
}
export interface MDMTActualvsEstimateReportParameters
  extends _MDMTActualvsEstimateReportParameters {
  constructor: { new (): MDMTActualvsEstimateReportParameters };
}
export var MDMTActualvsEstimateReportParameters: {
  new (): MDMTActualvsEstimateReportParameters;
};

/** Purpose - Parameter definition for Data Stream Missing Data Report
 * Report Name - DataStreamMissingData
 * MSATS Reports - RM38 */
interface _MDMTDataStreamMissingDataReportParameters
  extends _BaseReportParameters {
  AsAtDate: Date;
  FromDate: Date;
  MDP?: PartyIdentifier;
  ToDate: Date;
}
export interface MDMTDataStreamMissingDataReportParameters
  extends _MDMTDataStreamMissingDataReportParameters {
  constructor: { new (): MDMTDataStreamMissingDataReportParameters };
}
export var MDMTDataStreamMissingDataReportParameters: {
  new (): MDMTDataStreamMissingDataReportParameters;
};

/** Purpose - Parameter definition for HighPriorityMissingData
 * Report Name - HighPriorityMissingData
 * MSATS Reports - RM37 */
interface _MDMTHighPriorityMissingDataReportParameters
  extends _BaseReportParameters {
  AsAtDate: Date;
  FromDate: Date;
  MDP?: PartyIdentifier;
  ToDate: Date;
}
export interface MDMTHighPriorityMissingDataReportParameters
  extends _MDMTHighPriorityMissingDataReportParameters {
  constructor: { new (): MDMTHighPriorityMissingDataReportParameters };
}
export var MDMTHighPriorityMissingDataReportParameters: {
  new (): MDMTHighPriorityMissingDataReportParameters;
};

/** Purpose - Parameter definition for a Level  2 Settlement Reconciliation Report
 * Report Name - Level2SettlementReconciliation
 * MSATS Reports - RM21 */
interface _MDMTLevel2SettlementReconciliationReportParameters
  extends _BaseReportParameters {
  version?: r10;
  FRMP?: PartyIdentifier;
  FromDate?: Date;
  LastSequenceNumber?: number;
  LR: PartyIdentifier;
  MDP?: PartyIdentifier;
  SettlementCase: number;
  ToDate?: Date;
  TransmissionNodeIdentifier: string;
}
export interface MDMTLevel2SettlementReconciliationReportParameters
  extends _MDMTLevel2SettlementReconciliationReportParameters {
  constructor: { new (): MDMTLevel2SettlementReconciliationReportParameters };
}
export var MDMTLevel2SettlementReconciliationReportParameters: {
  new (): MDMTLevel2SettlementReconciliationReportParameters;
};

/** Purpose - Parameter definition for a Level  3 Settlement Reconciliation Report
 * Report Name - Level3SettlementReconciliation
 * MSATS Reports - RM17 */
interface _MDMTLevel3SettlementReconciliationReportParameters
  extends _BaseReportParameters {
  FromDate?: Date;
  LastSequenceNumber?: number;
  NMI: string;
  SettlementCase: number;
  ToDate?: Date;
}
export interface MDMTLevel3SettlementReconciliationReportParameters
  extends _MDMTLevel3SettlementReconciliationReportParameters {
  constructor: { new (): MDMTLevel3SettlementReconciliationReportParameters };
}
export var MDMTLevel3SettlementReconciliationReportParameters: {
  new (): MDMTLevel3SettlementReconciliationReportParameters;
};

/** Purpose - Parameter definition for Meter Data Delivery Report
 * Report Name - SDD Export
 * MSATS Report - MTR_DATA_DEL_XML_CRT */
interface _MDMTMeterDataDeliveryReportParameters extends _BaseReportParameters {
  version?: r19;
  FromDate: Date;
  ToDate: Date;
}
export interface MDMTMeterDataDeliveryReportParameters
  extends _MDMTMeterDataDeliveryReportParameters {
  constructor: { new (): MDMTMeterDataDeliveryReportParameters };
}
export var MDMTMeterDataDeliveryReportParameters: {
  new (): MDMTMeterDataDeliveryReportParameters;
};

/** Purpose - Parameter definition for Mismatch Data Report
 * Report Name - MismatchData
 * MSATS Reports - RM39 */
interface _MDMTMismatchDataReportParameters extends _BaseReportParameters {
  AsAtDate: Date;
  FromDate: Date;
  MDP?: PartyIdentifier;
  ToDate: Date;
}
export interface MDMTMismatchDataReportParameters
  extends _MDMTMismatchDataReportParameters {
  constructor: { new (): MDMTMismatchDataReportParameters };
}
export var MDMTMismatchDataReportParameters: {
  new (): MDMTMismatchDataReportParameters;
};

/** Purpose - Parameter definition for a Missing Data (null) Report
 * Report Name - MissingData
 * MSATS Report - RM11 */
interface _MDMTMissingDataReportParameters extends _BaseReportParameters {
  version?: r10;
  AsAtDate: Date;
  DataType: string;
  FromDate: Date;
  LastSequenceNumber?: number;
  MDP?: PartyIdentifier;
  NMI?: string;
  NMISelection: MDMNMISelectionType;
  ToDate: Date;
}
export interface MDMTMissingDataReportParameters
  extends _MDMTMissingDataReportParameters {
  constructor: { new (): MDMTMissingDataReportParameters };
}
export var MDMTMissingDataReportParameters: {
  new (): MDMTMissingDataReportParameters;
};

/** Purpose - Parameter definition for a NMI Data Streams History Report
 * Report Name - NMIDataStreamsHistory
 * MSATS Report - RM13 */
interface _MDMTNMIDataStreamsHistoryReportParameters
  extends _BaseReportParameters {
  AsAtDate: Date;
  DataType: string;
  FromDate: Date;
  LastSequenceNumber?: number;
  NMI: string;
  ToDate: Date;
}
export interface MDMTNMIDataStreamsHistoryReportParameters
  extends _MDMTNMIDataStreamsHistoryReportParameters {
  constructor: { new (): MDMTNMIDataStreamsHistoryReportParameters };
}
export var MDMTNMIDataStreamsHistoryReportParameters: {
  new (): MDMTNMIDataStreamsHistoryReportParameters;
};

/** Purpose - Parameter definition for a PPS Report
 * Report Name - PPS
 * MSATS Reports - RM20 */
interface _MDMTPPSReportParameters extends _BaseReportParameters {
  AsAtDate: Date;
  FromDate?: Date;
  LastSequenceNumber?: number;
  MDPVersion?: string;
  ProfileName?: string;
  SettlementCase: number;
  ToDate?: Date;
}
export interface MDMTPPSReportParameters extends _MDMTPPSReportParameters {
  constructor: { new (): MDMTPPSReportParameters };
}
export var MDMTPPSReportParameters: { new (): MDMTPPSReportParameters };

/** Purpose - MDM Reports only provide support for "Interval" and "Consumption" data streams.That restriction is implemented in MSATS. */
export type MDMTReportsDataStreamType = string;
type _MDMTReportsDataStreamType = _DataStreamType;

/** Purpose - Parameter definition for reports requiring only the settlement case identifier
 * Report Names - SettlementAggregatedData, SettlementNonAggregatedData, SettlementProfileShape
 * MSATS Reports - RM23, RM24, RM25
 * Detail - Note that the same report parameters type can be used for several reports since they all use the
 * same parameters. It is thus the report name that will indicate what output will be produced. */
interface _MDMTSettlementCaseDataReportParameters
  extends _BaseReportParameters {
  SettlementCase: number;
}
export interface MDMTSettlementCaseDataReportParameters
  extends _MDMTSettlementCaseDataReportParameters {
  constructor: { new (): MDMTSettlementCaseDataReportParameters };
}
export var MDMTSettlementCaseDataReportParameters: {
  new (): MDMTSettlementCaseDataReportParameters;
};

/** Purpose - Parameter definition for reports requiring the settlement case identifier and optionally a date range within it
 * Report Names - Level1SettlementReconciliation, DataEstimation
 * MSATS Reports - RM16, RM22
 * Detail - Note that the same report parameters type can be used for several reports since they all use the
 * same parameters. It is thus the report name that will indicate what output will be produced. */
interface _MDMTSettlementCaseDateRangeReportParameters
  extends _BaseReportParameters {
  version?: r10;
  FromDate?: Date;
  LastSequenceNumber?: number;
  SettlementCase: number;
  SettlementRun?: MDMSettlementRunType;
  ToDate?: Date;
}
export interface MDMTSettlementCaseDateRangeReportParameters
  extends _MDMTSettlementCaseDateRangeReportParameters {
  constructor: { new (): MDMTSettlementCaseDateRangeReportParameters };
}
export var MDMTSettlementCaseDateRangeReportParameters: {
  new (): MDMTSettlementCaseDateRangeReportParameters;
};

/** Purpose - Parameter definition for SAPS Reconciliation
 * Report Name - RegulatedSAPSGeneratorReconciliation
 * MSATS Reports - RM51 */
interface _MDMTSettlementCaseDetailsReportParameters
  extends _BaseReportParameters {
  NMI?: string;
  ProfileArea?: string;
  SettlementCase: number;
  TransmissionNodeIdentifier?: string;
}
export interface MDMTSettlementCaseDetailsReportParameters
  extends _MDMTSettlementCaseDetailsReportParameters {
  constructor: { new (): MDMTSettlementCaseDetailsReportParameters };
}
export var MDMTSettlementCaseDetailsReportParameters: {
  new (): MDMTSettlementCaseDetailsReportParameters;
};

/** Purpose - Acknowledge a received message
 * Detail - For every message, a message acknowledgment is generated (with the exception of messages containing message acknowledgements).
 *
 * Any errors are reported via Event elements.
 *
 * If a message is rejected, no receipt identifier need be provided with the acknowledgement. */
interface _MessageAcknowledgement extends BaseType {
  duplicate: YesNo;
  initiatingMessageID: string;
  receiptDate: Date;
  receiptID?: string;
  status: MessageStatus;
  Event?: Event[];
}
export interface MessageAcknowledgement extends _MessageAcknowledgement {
  constructor: { new (): MessageAcknowledgement };
}
export var MessageAcknowledgement: { new (): MessageAcknowledgement };

export type MessageContextID = string;
type _MessageContextID = Primitive._string;

/** Purpose -Contain instances of message ID meta data as a parent wrapper. */
interface _MessageDetails extends BaseType {
  MessageMetaData?: MessageMetaData[];
}
export interface MessageDetails extends _MessageDetails {
  constructor: { new (): MessageDetails };
}
export var MessageDetails: { new (): MessageDetails };

/** Purpose - Uniquely identify every message generated by the message sender
 * Detail - Note that message identifiers do not have to be globally unique, only unique to a particular sender. However, the length has been chosen such that UUIDs can be used as message identifiers if considered appropriate, guaranteeing global uniqueness.
 *
 * A message acknowledgement identifies which message it is acknowledging by providing the message identifier as an attribute. */
export type MessageIdentifier = string;
type _MessageIdentifier = Primitive._string;

/** Purpose - Contains an instance of message meta data related to one message id. */
interface _MessageMetaData extends BaseType {
  FromParticipantID?: PartyIdentifier;
  InitiatingMessageID?: string;
  MessageContextID: string;
  MessageID?: string;
  MessageType: HubMessageType;
  Priority?: TransactionPriority;
  ReceivedDateTime: Date;
  TransactionGroup?: TransactionGroup;
}
export interface MessageMetaData extends _MessageMetaData {
  constructor: { new (): MessageMetaData };
}
export var MessageMetaData: { new (): MessageMetaData };

/** Purpose - Provide the processing priority desired by the sender
 * Detail - The sender can indicate information needed by the receiver to determine whether or not the sender is authorised to submit the transactions within the message.
 *
 * For the Market Settlement And Transfer System (MSATS), this will be used to hold the participant userid from which the context for transaction processing is determined. */
export type MessageSecurityContext = string;
type _MessageSecurityContext = Primitive._string;

/** Purpose - Indicate the acceptance or rejection of the message. */
export type MessageStatus = "Accept" | "Reject";
interface _MessageStatus extends Primitive._string {
  content: MessageStatus;
}

/** MSATS Data Model Column - AddlSiteInfo */
export type MeterAdditionalSiteInformation = string;
type _MeterAdditionalSiteInformation = Primitive._string;

/** MSATS Data Model Column - AssetMgmtPlan */
export type MeterAssetManagementPlan = string;
type _MeterAssetManagementPlan = Primitive._string;

/** MSATS Data Model Column - CalibrationTables */
export type MeterCalibrationTables = string;
type _MeterCalibrationTables = Primitive._string;

/** MSATS Data Model Column - CommEquipType */
export type MeterCommunicationsEquipmentType = string;
type _MeterCommunicationsEquipmentType = Primitive._string;

/** MSATS Data Model Column - CommProtocol */
export type MeterCommunicationsProtocol = string;
type _MeterCommunicationsProtocol = Primitive._string;

/** MSATS Data Model Column - MeterConstant */
export type MeterConstant = string;
type _MeterConstant = Primitive._string;

/** MSATS Data Model Column - */
export type MeterConsumptionType = "Actual" | "Cumulative";
interface _MeterConsumptionType extends Primitive._string {
  content: MeterConsumptionType;
}

/** MSATS Data Model Column - ControlledLoad */
export type MeterControlledLoad = string;
type _MeterControlledLoad = Primitive._string;

/** MSATS Data Model Column - DataConv */
export type MeterDataConversion = string;
type _MeterDataConversion = Primitive._string;

/** Schema - MeterDataManagement */
interface _MeterDataHistoryRequest extends BaseType {
  version?: r9;
  CSVHistoryRequestData: CSVRequestFormat;
  SingleHistoryRequestData: NMITransactionBase;
}
export interface MeterDataHistoryRequest extends _MeterDataHistoryRequest {
  constructor: { new (): MeterDataHistoryRequest };
}
export var MeterDataHistoryRequest: { new (): MeterDataHistoryRequest };

/** Schema - MeterDataManagement */
interface _MeterDataHistoryResponse extends BaseType {
  version?: r9;
  CSVHistoryResponseData: CSVResponseFormat;
}
export interface MeterDataHistoryResponse extends _MeterDataHistoryResponse {
  constructor: { new (): MeterDataHistoryResponse };
}
export var MeterDataHistoryResponse: { new (): MeterDataHistoryResponse };

/** Schema - MeterDataManagement */
interface _MeterDataMissingNotification extends BaseType {
  version?: r14;
  CSVMissingMeterData: CSVRequestFormat;
  MissingMeterData: NMITransactionBase;
}
export interface MeterDataMissingNotification
  extends _MeterDataMissingNotification {
  constructor: { new (): MeterDataMissingNotification };
}
export var MeterDataMissingNotification: {
  new (): MeterDataMissingNotification;
};

/** Application - Meter Data Management
 * TransactionExchange - Meter Data Delivery
 * TransactionGroup - MDMT for VicGas and SAWA Gas
 * Priority - Low
 * Purpose - Provide meter data
 * Detail - Only one type of meter data can be delivered within a given transaction.
 *
 * Transaction Group: MTRD NEM - B2B Electricity National Electricity B2B Process Tranche 1 Build Pack;	Only CSVConsumptionData and CSVIntervalData used. */
interface _MeterDataNotification extends BaseType {
  version?: r25;
  /** Purpose - Deliver consumption meter data (also called basic meter data).
   * Detail - The following column headings will be employed in the default order as listed
   * for each energy market.
   *
   * NEM
   * NMI - 10 characters
   * Suffix - 2 characters
   * MDPVersionDate - YYYYMMDDHHMMSS
   * FromDate - YYYYMMDD
   * ToDate - YYYYMMDD
   * Status - A or E
   * Reading - in kiloWattHours, no leading/trailing zeros
   *
   * VICGAS
   * NMI
   * NMI_Checksum
   * RB_Reference_Number
   * Reason_For_Special_Read
   * Gas_Meter_Number
   * Gas_Meter_Units
   * Previous_Index_Value
   * Previous_Read_Date
   * Current_Index_Value
   * Current_Read_Date
   * Volume_Flow
   * Average_Heating_Value
   * Pressure_Correction_Factor
   * Consumed_Energy
   * Type_of_Read
   * Estimation_Substitution_Type
   * Estimation_Substitution_Reason_Code
   * Meter_Status
   * Next_Scheduled_Read_Date
   * Hi_Low_Failure
   * Meter_Capacity_Failure
   * Adjustment_Reason_Code
   * Energy_Calculation_Date_Stamp
   * Energy_Calculation_Time_Stamp
   * For further details on VICGAS requirements refer to VENCorp Participant Build Pack 3                                                                                     B2B ELECTRICITY                                    Contains embedded data in CSV format for basic meters. This is the standard file format for basic meter data defined in a valid MDFF. */
  CSVConsumptionData: CSVDataWithName;
  /** Purpose - Deliver interval meter data
   * Detail - The following column headings will be employed in the default order as listed
   * for each energy market.
   *
   * NEM
   * NMI - 10 characters
   * Suffix - 2 characters
   * MDPVersionDate - YYYYMMDDHHMMSS
   * SettlementDate - YYYYMMDD
   * Status - 48 characters, 1 per interval, A or E
   * Period01 - in kiloWattHours, no leading/trailing zeros
   * Period02 - in kiloWattHours, no leading/trailing zeros
   * ...
   * Period48 - in kiloWattHours, no leading/trailing zeros.
   * B2B ELECTRICITY
   * Contains embedded data in CSV format for interval meters. This is the standard file format for interval meter data defined in a valid MDFF. */
  CSVIntervalData: CSVDataWithName;
  /** Purpose - Deliver profile shape data
   * Detail - The following column headings will be employed in the default order listed
   * for each energy market.
   *
   * NEM
   * ProfileName - as per MDM
   * MDPVersionDate - YYYYMMDDHHMMSS
   * SettlementDate - YYYYMMDD
   * Period01- in kiloWattHours, no leading/trailing zeros
   * Period02 - in kiloWattHours, no leading/trailing zeros
   * ...
   * Period48 - in kiloWattHours, no leading/trailing zeros */
  CSVProfileData: CSVDataWithName;
  MeterReadingGroup?: MeterReadingGroup;
  ParticipantRole?: RoleAssignment;
  RecordCount?: number;
}
export interface MeterDataNotification extends _MeterDataNotification {
  constructor: { new (): MeterDataNotification };
}
export var MeterDataNotification: { new (): MeterDataNotification };

/** Application - Meter Data Management
 * TransactionExchange - Meter Data Delivery
 * TransactionGroup - MDMT
 * Priority - Low
 * Purpose - Provide acknowledgment of the loading of meter data into MDM
 * Detail - Any errors are reported via Event elements. */
interface _MeterDataResponse extends BaseType {
  version?: r29;
  AcceptedCount: number;
  ActivityID: number;
  Event?: Event[];
  LoadDate: Date;
}
export interface MeterDataResponse extends _MeterDataResponse {
  constructor: { new (): MeterDataResponse };
}
export var MeterDataResponse: { new (): MeterDataResponse };

/** MSATS Data Model Column - DataValidations */
export type MeterDataValidations = string;
type _MeterDataValidations = Primitive._string;

/** Schema - MeterDataManagement */
interface _MeterDataVerifyRequest extends BaseType {
  version?: r9;
  VerifyRequestData: NMITransactionBase;
}
export interface MeterDataVerifyRequest extends _MeterDataVerifyRequest {
  constructor: { new (): MeterDataVerifyRequest };
}
export var MeterDataVerifyRequest: { new (): MeterDataVerifyRequest };

/** Schema - MeterDataManagement */
interface _MeterDataVerifyResponse extends BaseType {
  version?: r9;
  VerifyResponseData: NMITransactionBase;
}
export interface MeterDataVerifyResponse extends _MeterDataVerifyResponse {
  constructor: { new (): MeterDataVerifyResponse };
}
export var MeterDataVerifyResponse: { new (): MeterDataVerifyResponse };

/** MSATS Data Model Column - Demand1, Demand2 */
export type MeterDemand = number;
type _MeterDemand = Primitive._number;

/** MSATS Data Model Column - DialFormat */
export type MeterDialFormat = number;
type _MeterDialFormat = Primitive._number;

interface _MeteredSupplyPointsCountUpdate extends BaseType {
  version?: r9;
  Count: number;
  CountDate: Date;
}
export interface MeteredSupplyPointsCountUpdate
  extends _MeteredSupplyPointsCountUpdate {
  constructor: { new (): MeteredSupplyPointsCountUpdate };
}
export var MeteredSupplyPointsCountUpdate: {
  new (): MeteredSupplyPointsCountUpdate;
};

/** Indicates the meter equipment type
 * Version 1.0 additions
 * - Basic Meter
 * - Interval Meter
 * - Network Device
 * - Control Equipment
 * - Instrument Transformer */
export type MeterEquipmentType =
  | "Basic Meter"
  | "Interval Meter"
  | "Network Device"
  | "Control Equipment"
  | "Instrument Transformer";
interface _MeterEquipmentType extends Primitive._string {
  content: MeterEquipmentType;
}

/** MSATS Data Model Column - EstInstruct */
export type MeterEstablishmentInstructions = string;
type _MeterEstablishmentInstructions = Primitive._string;

/** MSATS Data Model Column - EstInstruct */
export type MeterEstimationInstructions = string;
type _MeterEstimationInstructions = Primitive._string;

interface _MeterFaultAndIssueNotification extends BaseType {
  version?: r36;
  DateIdentified: Date;
  Duration?: string;
  EndDate?: Date;
  Meters?: ElectricityMeters;
  NMI: NMI;
  Notes?: string;
  ReasonForNotice: ReasonForNotice;
  StartDate?: Date;
  StartTime?: string;
  SupplyOff?: SupplyOff;
  SupplyOn: YesNo;
}
export interface MeterFaultAndIssueNotification
  extends _MeterFaultAndIssueNotification {
  constructor: { new (): MeterFaultAndIssueNotification };
}
export var MeterFaultAndIssueNotification: {
  new (): MeterFaultAndIssueNotification;
};

/** MSATS Data Model Column - MeterHazard */
export type MeterHazard = string;
type _MeterHazard = Primitive._string;

export type MeteringType = string;
type _MeteringType = Primitive._string;

/** NSW/ACT Meter Installation Types
 * O - Ordinary
 * M - Master Meter
 * S - Sub-meter linked to a master meter */
export type MeterInstallationType = "O" | "M" | "S";
interface _MeterInstallationType extends Primitive._string {
  content: MeterInstallationType;
}

/** MSATS Data Model Column - MeterInstallCode */
export type MeterInstallationTypeCode = string;
type _MeterInstallationTypeCode = Primitive._string;

/** Purpose - Row of the MeterInstallationTypeCodes table
 * MSATS Data Model Table - CATS_Meter_Install_Type_Codes
 * Replication Table Name - MeterInstallationTypeCodes */
interface _MeterInstallationTypeCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
  ManualRead: YesNo;
}
export interface MeterInstallationTypeCodeRow
  extends _MeterInstallationTypeCodeRow {
  constructor: { new (): MeterInstallationTypeCodeRow };
}
export var MeterInstallationTypeCodeRow: {
  new (): MeterInstallationTypeCodeRow;
};

/** Purpose - Describe installation type codes
 * MSATS Data Model Column - MeterInstallDesc
 * Detail - The description is intended to assist in identification of the correct code. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type MeterInstallationTypeDescription = string;
type _MeterInstallationTypeDescription = Primitive._string;

/** MSATS Data Model Column - MeterLocation */
export type MeterLocation = string;
type _MeterLocation = Primitive._string;

/** Purpose - Identify the Meter Malfunction Exemption Number - MeterMalfunctionExemptionNumber
 * Details - The exemption number granted by AEMO when a meter malfunction exemption is granted */
export type MeterMalfunctionExemptionNumber = string;
type _MeterMalfunctionExemptionNumber = Primitive._string;

/** MSATS Data Model Column - MeterManufacturer */
export type MeterManufacturer = string;
type _MeterManufacturer = Primitive._string;

/** MSATS Data Model Column - MeasurementType */
export type MeterMeasurementType = string;
type _MeterMeasurementType = Primitive._string;

/** NSW/ACT Meter Measurement Unit Types
 * M - Metric
 * I - Imperial */
export type MeterMeasurementUnitType = "M" | "I";
interface _MeterMeasurementUnitType extends Primitive._string {
  content: MeterMeasurementUnitType;
}

/** MSATS Data Model Column - MeterModel */
export type MeterModel = string;
type _MeterModel = Primitive._string;

/** MSATS Data Model Column - Multiplier */
export type MeterMultiplier = number;
type _MeterMultiplier = Primitive._number;

export type MeterMultiplierType = number;
type _MeterMultiplierType = Primitive._number;

/** MSATS Data Model Column - NTAddInfo */
export type MeterNetworkAdditionalInformation = string;
type _MeterNetworkAdditionalInformation = Primitive._string;

/** MSATS Data Model Column - Password */
export type MeterPassword = string;
type _MeterPassword = Primitive._string;

/** MSATS Data Model Column - MeterPoint */
export type MeterPoint = string;
type _MeterPoint = Primitive._string;

/** MSATS Data Model Column - MeterProgram */
export type MeterProgram = string;
type _MeterProgram = Primitive._string;

/** Schema - Gas */
export type MeterReadingDayNumber = string;
type _MeterReadingDayNumber = Primitive._string;

/** Identifies a Delivery Point Reading Frequency as Daily or Non Daily */
interface _MeterReadingFrequencyType extends BaseType {
  Description?: string;
  MeterReadingFrequencyTypeCode: MeterReadingFrequencyTypeBase;
}
export interface MeterReadingFrequencyType extends _MeterReadingFrequencyType {
  constructor: { new (): MeterReadingFrequencyType };
}
export var MeterReadingFrequencyType: { new (): MeterReadingFrequencyType };

/** NSW/ACT Meter Reading Frequency Types
 * D - Daily
 * N - Non Daily */
export type MeterReadingFrequencyTypeBase = "D" | "N";
interface _MeterReadingFrequencyTypeBase extends Primitive._string {
  content: MeterReadingFrequencyTypeBase;
}

interface _MeterReadingGroup extends BaseType {
  context?: MeterReadingGroupType;
  MeterReadingGroupId: string;
}
export interface MeterReadingGroup extends _MeterReadingGroup {
  constructor: { new (): MeterReadingGroup };
}
export var MeterReadingGroup: { new (): MeterReadingGroup };

/** This element is used to define the ID associated with the Meter Reading Group Type. */
export type MeterReadingGroupId = string;
type _MeterReadingGroupId = Primitive._string;

/** This is a method of grouping meters that belong to either one end-use customer (NMI), one Builder via all portable meters being defined as belonging to one Site (the builders address even though these meters are temporarily installed at building sites), or finally for a large company (eg Water Corp) by grouping all the Meters into one or more Routes (Route ID).  Values used by WA market are NMI, SITE or ROUTE. */
export type MeterReadingGroupType = "NMI" | "Site" | "Route";
interface _MeterReadingGroupType extends Primitive._string {
  content: MeterReadingGroupType;
}

/** For a given Reading Group Type (NMI, Site or Route), this transaction is used by an external system to request details of the meters related to the group id, such that an external system can accept meter readings and perform basic validation before submission to the Meter Reading System. */
interface _MeterReadingReferenceDataRequest extends BaseType {
  version?: r19;
  MeterReadingGroup: MeterReadingGroup;
}
export interface MeterReadingReferenceDataRequest
  extends _MeterReadingReferenceDataRequest {
  constructor: { new (): MeterReadingReferenceDataRequest };
}
export var MeterReadingReferenceDataRequest: {
  new (): MeterReadingReferenceDataRequest;
};

interface _MeterReadingReferenceDataResponse extends BaseType {
  version?: r19;
  Event?: Event;
  MeterReadingGroup: MeterReadingGroup;
  NMIStandingData: NMIStandingData;
}
export interface MeterReadingReferenceDataResponse
  extends _MeterReadingReferenceDataResponse {
  constructor: { new (): MeterReadingReferenceDataResponse };
}
export var MeterReadingReferenceDataResponse: {
  new (): MeterReadingReferenceDataResponse;
};

/** Schema - MeterDataManagement */
interface _MeterReadInputNotification extends BaseType {
  version?: r9;
  ReadInputData: NMIStandingData;
}
export interface MeterReadInputNotification
  extends _MeterReadInputNotification {
  constructor: { new (): MeterReadInputNotification };
}
export var MeterReadInputNotification: { new (): MeterReadInputNotification };

/** MSATS Data Model Column - MeterReadType */
export type MeterReadTypeCode = string;
type _MeterReadTypeCode = Primitive._string;

/** Purpose - Identifies a register within a meter
 * MSATS Data Model Column - RegisterId */
export type MeterRegisterIdentifier = string;
type _MeterRegisterIdentifier = Primitive._string;

/** MSATS Data Model Column - RegisterIdStatus */
export type MeterRegisterStatusCode = "C" | "R";
interface _MeterRegisterStatusCode extends Primitive._string {
  content: MeterRegisterStatusCode;
}

/** MSATS Data Model Column - RemotePhoneNumber */
export type MeterRemotePhoneNumber = string;
type _MeterRemotePhoneNumber = Primitive._string;

/** MSATS Data Model Column - MeterRoute */
export type MeterRoute = string;
type _MeterRoute = Primitive._string;

/** MSATS Data Model Column - MeterSerial */
export type MeterSerialNumber = string;
type _MeterSerialNumber = Primitive._string;

/** Schema - RemoteService.  Collection of affected Meters */
interface _MeterSerialNumbers extends BaseType {
  MeterSerialNumber: string[];
}
export interface MeterSerialNumbers extends _MeterSerialNumbers {
  constructor: { new (): MeterSerialNumbers };
}
export var MeterSerialNumbers: { new (): MeterSerialNumbers };

/** Purpose - Status code of Meter Register Data
 * MSATS Data Model Column - MeterStatus */
export type MeterStatusCode = "C" | "D" | "R";
interface _MeterStatusCode extends Primitive._string {
  content: MeterStatusCode;
}

/** MSATS Data Model Column - TestCalibProgrm */
export type MeterTestCalibrationProgram = string;
type _MeterTestCalibrationProgram = Primitive._string;

/** MSATS Data Model Column - TestPerformedBy */
export type MeterTestPerformedBy = string;
type _MeterTestPerformedBy = Primitive._string;

/** MSATS Data Model Column - TestResult
 * Renamed from MeterTestResultAccuracy */
export type MeterTestResult = string;
type _MeterTestResult = Primitive._string;

/** MSATS Data Model Column - TestResultAccuracy */
export type MeterTestResultAccuracy = number;
type _MeterTestResultAccuracy = Primitive._number;

/** MSATS Data Model Column - TestResultNotes */
export type MeterTestResultNotes = string;
type _MeterTestResultNotes = Primitive._string;

/** MSATS Data Model Column - TimeOfDay */
export type MeterTimeOfDay = string;
type _MeterTimeOfDay = Primitive._string;

/** MSATS Data Model Column - TransformerLocation */
export type MeterTransformerLocation = string;
type _MeterTransformerLocation = Primitive._string;

/** MSATS Data Model Column - TransformerRatio */
export type MeterTransformerRatio = string;
type _MeterTransformerRatio = Primitive._string;

/** MSATS Data Model Column - TransformerType */
export type MeterTransformerType = string;
type _MeterTransformerType = Primitive._string;

/** NSW/ACT Meter Types
 * G - Gas
 * W - Hot Water */
export type MeterType = "G" | "W";
interface _MeterType extends Primitive._string {
  content: MeterType;
}

/** MSATS Data Model Column - UnitOfMeasure */
export type MeterUnitOfMeasure = string;
type _MeterUnitOfMeasure = Primitive._string;

/** MSATS Data Model Column - MeterUse */
export type MeterUse = string;
type _MeterUse = Primitive._string;

/** MSATS Data Model Column - UserAccessRights */
export type MeterUserAccessRights = string;
type _MeterUserAccessRights = Primitive._string;

export type MethodSent = "Faxed" | "Email" | "Online" | "OnSite";
interface _MethodSent extends Primitive._string {
  content: MethodSent;
}

export type MIRNStatus =
  | "Commissioned"
  | "Decommissioned"
  | "Deregistered"
  | "Registered"
  | "Unclaimed";
interface _MIRNStatus extends Primitive._string {
  content: MIRNStatus;
}

/** Purpose - Defines the market day and intermittent generator and other essential details for bid */
interface _MMSBidDetails extends BaseType {}
export interface MMSBidDetails extends _MMSBidDetails {
  constructor: { new (): MMSBidDetails };
}
export var MMSBidDetails: { new (): MMSBidDetails };

/** Purpose - Provide generation element availability in clusters for the StPasa time frame */
interface _MMSClusterIntermittentGenAvailability extends BaseType {
  Cluster: MMSClusterIntermittentGenAvailabilityClusterType[];
}
export interface MMSClusterIntermittentGenAvailability
  extends _MMSClusterIntermittentGenAvailability {
  constructor: { new (): MMSClusterIntermittentGenAvailability };
}
export var MMSClusterIntermittentGenAvailability: {
  new (): MMSClusterIntermittentGenAvailability;
};

interface _MMSClusterIntermittentGenAvailabilityClusterType extends BaseType {
  ElementClusterId: string;
  MMSPeriods: MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsType;
}
interface MMSClusterIntermittentGenAvailabilityClusterType
  extends _MMSClusterIntermittentGenAvailabilityClusterType {
  constructor: { new (): MMSClusterIntermittentGenAvailabilityClusterType };
}

interface _MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsType
  extends BaseType {
  MMSPeriod: MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsTypeMMSPeriodType[];
}
interface MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsType
  extends _MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsType {
  constructor: {
    new (): MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsType;
  };
}

interface _MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsTypeMMSPeriodType
  extends BaseType {
  ElementsNotAvailable: number;
  MMSPeriodId: number;
}
interface MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsTypeMMSPeriodType
  extends _MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsTypeMMSPeriodType {
  constructor: {
    new (): MMSClusterIntermittentGenAvailabilityClusterTypeMMSPeriodsTypeMMSPeriodType;
  };
}

/** Application - IntermittentGenAvaliability
 * TransactionExchange - IntermittentGenAvailability
 * TransactionGroup - EMMS
 * Priority - Low
 * Purpose - Provide new forecast intermittent generator availability for the Electricity MMS.
 * Detail - */
interface _MMSIntermittentGenAvailabilityRequest extends BaseType {
  version?: r33;
  BidDetails: MMSBidDetails;
  Clusters?: MMSClusterIntermittentGenAvailability;
  MMSPeriods?: MMSUpperLimitsIntermittentGenAvailability;
  MtPasa?: MMSMtPasaIntermittentGenAvailability;
}
export interface MMSIntermittentGenAvailabilityRequest
  extends _MMSIntermittentGenAvailabilityRequest {
  constructor: { new (): MMSIntermittentGenAvailabilityRequest };
}
export var MMSIntermittentGenAvailabilityRequest: {
  new (): MMSIntermittentGenAvailabilityRequest;
};

/** Purpose - Provide intermittent generator availability information for the MtPasa time frame */
interface _MMSMtPasaIntermittentGenAvailability extends BaseType {
  Clusters?: MMSMtPasaIntermittentGenAvailabilityClustersType;
  UpperLimit?: number;
}
export interface MMSMtPasaIntermittentGenAvailability
  extends _MMSMtPasaIntermittentGenAvailability {
  constructor: { new (): MMSMtPasaIntermittentGenAvailability };
}
export var MMSMtPasaIntermittentGenAvailability: {
  new (): MMSMtPasaIntermittentGenAvailability;
};

interface _MMSMtPasaIntermittentGenAvailabilityClustersType extends BaseType {
  Cluster: MMSMtPasaIntermittentGenAvailabilityClustersTypeClusterType[];
}
interface MMSMtPasaIntermittentGenAvailabilityClustersType
  extends _MMSMtPasaIntermittentGenAvailabilityClustersType {
  constructor: { new (): MMSMtPasaIntermittentGenAvailabilityClustersType };
}

interface _MMSMtPasaIntermittentGenAvailabilityClustersTypeClusterType
  extends BaseType {
  ElementClusterId: string;
  ElementsNotAvailable: number;
}
interface MMSMtPasaIntermittentGenAvailabilityClustersTypeClusterType
  extends _MMSMtPasaIntermittentGenAvailabilityClustersTypeClusterType {
  constructor: {
    new (): MMSMtPasaIntermittentGenAvailabilityClustersTypeClusterType;
  };
}

/** Id for half hourly interval of the day. The term period is MMS is deeply ingrained in MMS nomenclature. */
export type MMSPeriodId = number;
type _MMSPeriodId = Primitive._number;

/** Purpose - Provide upper limits on whole intermittent generator in StPasa time frame */
interface _MMSUpperLimitsIntermittentGenAvailability extends BaseType {
  MMSPeriod: MMSUpperLimitsIntermittentGenAvailabilityMMSPeriodType[];
}
export interface MMSUpperLimitsIntermittentGenAvailability
  extends _MMSUpperLimitsIntermittentGenAvailability {
  constructor: { new (): MMSUpperLimitsIntermittentGenAvailability };
}
export var MMSUpperLimitsIntermittentGenAvailability: {
  new (): MMSUpperLimitsIntermittentGenAvailability;
};

interface _MMSUpperLimitsIntermittentGenAvailabilityMMSPeriodType
  extends BaseType {
  MMSPeriodId: number;
  UpperLimit: number;
}
interface MMSUpperLimitsIntermittentGenAvailabilityMMSPeriodType
  extends _MMSUpperLimitsIntermittentGenAvailabilityMMSPeriodType {
  constructor: {
    new (): MMSUpperLimitsIntermittentGenAvailabilityMMSPeriodType;
  };
}

/** Purpose - Define the fixed Special Condition Code used in customer details notification where:
 * RecCustConf: Reconciliation - Confirmed with Customer. Means that the Retailer has confirmed with the Customer that the SenstiveLoad value is correct.
 * RecPerRetailer: Reconciliation - As per Retailer. Means that the Retailer reasonably believes that the SensitiveLoad value provided is correct.
 * RecPerDNSP: Reconciliation - As per DNSP. Means that the Retailer agrees that the SensitiveLoad value should be None, as inferred by the DNSP. */
export type MovementType =
  | "Update"
  | "Reconciliation"
  | "Site Vacant"
  | "RecCustConf"
  | "RecPerRetailer"
  | "RecPerDNSP";
interface _MovementType extends Primitive._string {
  content: MovementType;
}

/** Purpose - Definition of Block Parameters to be used in Market Reports that are required to be delivered in chunks. */
interface _MRBlockParameterType extends BaseType {
  CurrentBlockNumber: number;
  TotalBlockNumber: number;
}
export interface MRBlockParameterType extends _MRBlockParameterType {
  constructor: { new (): MRBlockParameterType };
}
export var MRBlockParameterType: { new (): MRBlockParameterType };

/** Purpose - Parameters for requesting a Market Report. Provide the ReportID which will be the same for all chunks.
 * For example if chunk 6 is required out of a report sent as 10 chunks populate BeginBlockNumber and EndBlockNumber as 6
 * and TotalBlockNumber as 10. */
interface _MRMissingBlockParameters extends _BaseReportParameters {
  BlockParameters: MRMissingBlockParametersBlockParametersType;
  RecreateReport: boolean;
}
export interface MRMissingBlockParameters extends _MRMissingBlockParameters {
  constructor: { new (): MRMissingBlockParameters };
}
export var MRMissingBlockParameters: { new (): MRMissingBlockParameters };

interface _MRMissingBlockParametersBlockParametersType extends BaseType {
  BeginBlockNumber: number;
  EndBlockNumber: number;
  ReportID: string;
}
interface MRMissingBlockParametersBlockParametersType
  extends _MRMissingBlockParametersBlockParametersType {
  constructor: { new (): MRMissingBlockParametersBlockParametersType };
}

/** MSATS Data Model Column - MSATSCode */
export type MSATSCode = string;
type _MSATSCode = Primitive._string;

/** Purpose - Row of the MSATSCodesDated table
 * MSATS Data Model Table - MSATS_CODE_COMBOS
 * Replication Table Name - MSATSCodeCombo */
interface _MSATSCodeComboRow extends _ReplicationDateRangeRow {
  version?: r43;
  Code1: string;
  Code2?: string;
  Code3?: string;
  Code4?: string;
  Code5?: string;
  CodeGroup: string;
  Description?: string;
  Value?: string;
}
export interface MSATSCodeComboRow extends _MSATSCodeComboRow {
  constructor: { new (): MSATSCodeComboRow };
}
export var MSATSCodeComboRow: { new (): MSATSCodeComboRow };

/** MSATS Data Model Column - CodeGroup */
export type MSATSCodeGroup = string;
type _MSATSCodeGroup = Primitive._string;

/** Purpose - Row of the MSATSCodeGroups table
 * MSATS Data Model Table - MSATS_CODE_GROUPS
 * Replication Table Name - MSATSCodeGroups */
interface _MSATSCodeGroupsRow extends _ReplicationBaseRow {
  version?: r43;
  CodeGroup: string;
  CodeGroupLastChanged?: Date;
  CodeTable: string;
  Description: string;
}
export interface MSATSCodeGroupsRow extends _MSATSCodeGroupsRow {
  constructor: { new (): MSATSCodeGroupsRow };
}
export var MSATSCodeGroupsRow: { new (): MSATSCodeGroupsRow };

/** Purpose - Row of the MSATSCodesDated table
 * MSATS Data Model Table - MSATS_CODES_DATED
 * Replication Table Name - MSATSCodesDated */
interface _MSATSCodesDatedRow extends _ReplicationDateRangeRow {
  version?: r43;
  Code: string;
  CodeGroup: string;
  Description?: string;
  Value?: string;
}
export interface MSATSCodesDatedRow extends _MSATSCodesDatedRow {
  constructor: { new (): MSATSCodesDatedRow };
}
export var MSATSCodesDatedRow: { new (): MSATSCodesDatedRow };

/** Purpose - Row of the MSATSCodes table
 * MSATS Data Model Table - MSATS_CODES
 * Replication Table Name - MSATSCodes */
interface _MSATSCodesRow extends _ReplicationBaseRow {
  version?: r43;
  Code: string;
  CodeGroup: string;
  Description?: string;
  Value?: string;
}
export interface MSATSCodesRow extends _MSATSCodesRow {
  constructor: { new (): MSATSCodesRow };
}
export var MSATSCodesRow: { new (): MSATSCodesRow };

/** MSATS Data Model Column - CodeTable */
export type MSATSCodeTableType = string;
type _MSATSCodeTableType = Primitive._string;

/** MSATS Data Model Column - CodeValue */
export type MSATSCodeValue = string;
type _MSATSCodeValue = Primitive._string;

/** MSATS Data Model Column - CodeValueDesc */
export type MSATSCodeValueDescription = string;
type _MSATSCodeValueDescription = Primitive._string;

/** Purpose - Row of the MSATSCodeValues table
 * MSATS Data Model Table - MSATS_CODE_VALUES
 * Replication Table Name - MSATSCodeValues */
interface _MSATSCodeValuesRow extends _ReplicationBaseRow {
  version?: r43;
  Description: string;
  Type: string;
  Value: string;
}
export interface MSATSCodeValuesRow extends _MSATSCodeValuesRow {
  constructor: { new (): MSATSCodeValuesRow };
}
export var MSATSCodeValuesRow: { new (): MSATSCodeValuesRow };

/** MSATS Data Model Column - CodeType */
export type MSATSCodeValueType = string;
type _MSATSCodeValueType = Primitive._string;

/** Purpose - container for MSATS Limit */
interface _MsatsLimit extends BaseType {
  DefaultLimit: number;
  GroupActual?: number;
  LowerLimit: number;
  ParticipantActual: number;
  StopFlag: string;
  UpperLimit: number;
}
export interface MsatsLimit extends _MsatsLimit {
  constructor: { new (): MsatsLimit };
}
export var MsatsLimit: { new (): MsatsLimit };

/** Purpose - container for MSATS Limits */
interface _MsatsLimits extends BaseType {
  Cr: MsatsLimit;
  CrNotification: MsatsLimit;
  Group?: PartyIdentifier;
  GroupMembers?: GroupMembers;
  NsrdNotification: MsatsLimit;
  NsrdResponse: MsatsLimit;
  OutboxFile: MsatsLimit;
  Participant: PartyIdentifier;
  Report: MsatsLimit;
}
export interface MsatsLimits extends _MsatsLimits {
  constructor: { new (): MsatsLimits };
}
export var MsatsLimits: { new (): MsatsLimits };

interface _MultiMeterSiteAccessDetails extends _NMIStandingData {
  version?: r34;
  Hazard?: SiteHazard[];
  LastModifiedDateTime: Date;
  MeterData?: MultiMeterSiteAccessDetailsMeterDataType;
  SiteData?: ServicePoint;
}
export interface MultiMeterSiteAccessDetails
  extends _MultiMeterSiteAccessDetails {
  constructor: { new (): MultiMeterSiteAccessDetails };
}
export var MultiMeterSiteAccessDetails: { new (): MultiMeterSiteAccessDetails };

interface _MultiMeterSiteAccessDetailsMeterDataType extends BaseType {
  Meter: GasMultiMeterStandingDataType;
}
interface MultiMeterSiteAccessDetailsMeterDataType
  extends _MultiMeterSiteAccessDetailsMeterDataType {
  constructor: { new (): MultiMeterSiteAccessDetailsMeterDataType };
}

/** Allows to specify the energy type abbreviation used in formulae to calculate the provided Energy Quantity. */
interface _NamedQuantityType extends _EnergyQuantity {
  name: string;
}
export interface NamedQuantityType extends _NamedQuantityType {
  constructor: { new (): NamedQuantityType };
}
export var NamedQuantityType: { new (): NamedQuantityType };

/** Purpose - Row of the NationalCalender table
 * MSATS Data Model Table - MSATS_National_Calender
 * Replication Table Name - NationalCalendar */
interface _NationalCalendarRow extends _ReplicationBaseRow {
  Date: Date;
  Description: string;
  Type: string;
}
export interface NationalCalendarRow extends _NationalCalendarRow {
  constructor: { new (): NationalCalendarRow };
}
export var NationalCalendarRow: { new (): NationalCalendarRow };

/** The ID (set by NEMMCO) of a issue */
export type NEMMCOIssueIdType = number;
type _NEMMCOIssueIdType = Primitive._number;

/** Purpose - Network charge record type - Generic Header "010, 012, 910, 913, 920, 930, 940" - Headers */
interface _NETBHeader extends BaseType {
  DateTime: Date;
  LNSP: PartyIdentifier;
  Period?: Period;
  Retailer: PartyIdentifier;
}
export interface NETBHeader extends _NETBHeader {
  constructor: { new (): NETBHeader };
}
export var NETBHeader: { new (): NETBHeader };

export type NetSystemLoadQuantityType = number;
type _NetSystemLoadQuantityType = Primitive._number;

/** Purpose - Define the structure network device detail. */
interface _NetworkDevice extends BaseType {
  NetworkDeviceLocation?: DeviceLocation;
  NetworkDeviceNumber?: string;
}
export interface NetworkDevice extends _NetworkDevice {
  constructor: { new (): NetworkDevice };
}
export var NetworkDevice: { new (): NetworkDevice };

/** Purpose - Parent container for list of network devices. */
interface _NetworkDevices extends BaseType {
  NetworkDevice: NetworkDevice[];
}
export interface NetworkDevices extends _NetworkDevices {
  constructor: { new (): NetworkDevices };
}
export var NetworkDevices: { new (): NetworkDevices };

/** Schema - NetworkBilling */
interface _NetworkDUoSBillingNotification extends BaseType {
  version?: r34;
  CSVNetworkDUoSDataDisputeNotification: CSVRequestFormat;
  CSVNetworkDUoSDataDisputeResolution: CSVRequestFormat;
  CSVNetworkDUoSDataExcludedServices: CSVRequestFormat;
  CSVNetworkDUoSDataPaymentAdvice: CSVRequestFormat;
  CSVNetworkDUoSDataTariffA: CSVRequestFormat;
  CSVNetworkDUoSDataTariffB: CSVRequestFormat;
  CSVNetworkDUoSDataTariffD: CSVRequestFormat;
  CSVNetworkDUoSDataTariffH: CSVRequestFormat;
  CSVNetworkDUoSDataTariffV: CSVRequestFormat;
}
export interface NetworkDUoSBillingNotification
  extends _NetworkDUoSBillingNotification {
  constructor: { new (): NetworkDUoSBillingNotification };
}
export var NetworkDUoSBillingNotification: {
  new (): NetworkDUoSBillingNotification;
};

/** Network ID has been included in several reports and as a part of meter standing data */
export type NetworkID = string;
type _NetworkID = Primitive._string;

interface _NetworkInvoiceData extends BaseType {
  ChargeItems: NetworkInvoiceDataChargeItemsType;
  Footer: InvoiceNotificationFooter;
  Header: NETBHeader;
  Invoices?: NetworkInvoiceDataInvoicesType;
  Summary: InvoiceNotificationSummary;
}
export interface NetworkInvoiceData extends _NetworkInvoiceData {
  constructor: { new (): NetworkInvoiceData };
}
export var NetworkInvoiceData: { new (): NetworkInvoiceData };

interface _NetworkInvoiceDataChargeItemsType extends BaseType {
  ChargeItem: BaseChargeItem[];
}
interface NetworkInvoiceDataChargeItemsType
  extends _NetworkInvoiceDataChargeItemsType {
  constructor: { new (): NetworkInvoiceDataChargeItemsType };
}

interface _NetworkInvoiceDataInvoicesType extends BaseType {
  Invoice: BaseInvoice[];
}
interface NetworkInvoiceDataInvoicesType
  extends _NetworkInvoiceDataInvoicesType {
  constructor: { new (): NetworkInvoiceDataInvoicesType };
}

/** Application - Network Billing
 * TransactionExchange -
 * TransactionGroup - NETB
 * Priority - Medium
 * Purpose - Submit network charges and invoice to the Retailer
 *
 * NEM
 * B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * B2B_NB_SA_IP_v1-0_-_Effective_13Apr2003.doc
 * B2B_NB_Vic_IP_v1-1_-_Effective_13Jan2002.doc
 * This complex type defines the transaction "NBCHARGES"
 * NMI data is only required for this transaction as per B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc in the various Charge Record types
 * This transaction is for use only in SA, NSW and VIC. */
interface _NetworkInvoiceNotification extends BaseType {
  version?: r11;
  CSVInvoice: CSVRequestFormat;
  InvoiceData: NetworkInvoiceData;
}
export interface NetworkInvoiceNotification
  extends _NetworkInvoiceNotification {
  constructor: { new (): NetworkInvoiceNotification };
}
export var NetworkInvoiceNotification: { new (): NetworkInvoiceNotification };

/** A unique identifier for a Network Receipt Point */
export type NetworkReceiptPointID = string;
type _NetworkReceiptPointID = Primitive._string;

/** Purpose - Identifies an LNSP specific network tariff
 * MSATS Data Model Column - NetworkTariffCode */
export type NetworkTariffCode = string;
type _NetworkTariffCode = Primitive._string;

/** Purpose - Provides description of an LNSP specific network tariff code
 * MSATS Data Model Column - NetworkTariffDesc */
export type NetworkTariffCodeDescription = string;
type _NetworkTariffCodeDescription = Primitive._string;

/** A unique identifier for Network Tariff Code */
export type NetworkTariffCodeType = string;
type _NetworkTariffCodeType = Primitive._string;

/** Purpose - Define the details of installed metering equipment. */
interface _NewEquipment extends BaseType {
  InstalledControlEquipment?: NMIStandingData;
  InstalledMeterEquipment?: ElectricityMeters;
  InstalledNetworkDevices?: NetworkDevices;
  InstalledTransformers?: ElectricityMeters;
}
export interface NewEquipment extends _NewEquipment {
  constructor: { new (): NewEquipment };
}
export var NewEquipment: { new (): NewEquipment };

/** Purpose - National Metering Identifier with optional checksum
 * Detail - Used to identify electricity and gas metering points */
interface _NMI extends _NMIBase {
  checksum?: number;
}
export interface NMI extends _NMI {
  constructor: { new (): NMI };
}
export var NMI: { new (): NMI };

/** Purpose - Row of the NMIAccessRules table
 * MSATS Data Model Table - CATS_Discovery_Access_Rules
 * Replication Table Name - NMIAccessRules */
interface _NMIAccessRuleRow extends _ReplicationDateRangeRow {
  Field: string;
  JurisdictionCode: string;
  Role: string;
  Table: string;
}
export interface NMIAccessRuleRow extends _NMIAccessRuleRow {
  constructor: { new (): NMIAccessRuleRow };
}
export var NMIAccessRuleRow: { new (): NMIAccessRuleRow };

/** Purpose - Helper type to assist in the definition of the NMI type */
export type NMIBase = string;
type _NMIBase = Primitive._string;

/** Purpose - Helper type to assist in the definition of the NMI type
 * Detail - The checksum is a single numeric digit. */
export type NMIChecksum = number;
type _NMIChecksum = Primitive._number;

/** Purpose - Identify the broad class to which the NMI belongs
 * MSATS Data Model Column - NMIClassCode
 * Detail - NMI classification often forms the basis for jurisdictional rules. */
export type NMIClassificationCode = string;
type _NMIClassificationCode = Primitive._string;

/** Purpose - Row of the NMIClassificationCodes table
 * MSATS Data Model Table - CATS_NMI_Class_Codes
 * Replication Table Name - NMIClassificationCodes */
interface _NMIClassificationCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface NMIClassificationCodeRow extends _NMIClassificationCodeRow {
  constructor: { new (): NMIClassificationCodeRow };
}
export var NMIClassificationCodeRow: { new (): NMIClassificationCodeRow };

/** Purpose - Describe the broad class to whcih the NMI belongs
 * MSATS Data Model Column - NMIClassDesc
 * Detail - The description is intended to assist in identification of the correct classification. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type NMIClassificationDescription = string;
type _NMIClassificationDescription = Primitive._string;

interface _NMIConfigurationType extends BaseType {
  NMISuffix: string[];
}
export interface NMIConfigurationType extends _NMIConfigurationType {
  constructor: { new (): NMIConfigurationType };
}
export var NMIConfigurationType: { new (): NMIConfigurationType };

/** Purpose - Identify a data stream associated with a NMI */
export type NMIDataStreamSuffix = string;
type _NMIDataStreamSuffix = Primitive._string;

/** Application - NMI Data Access
 * TransactionExchange - NMI Discovery
 * TransactionGroup - NMID
 * Priority - High
 * Purpose - Request a search of the NMI Standing Data
 * Detail - The JurisdictionCode is mandatory as it is used to determine  jurisdictional limitations on the types of searches allowed and the maximum number of matching rows returned for any one search. The remaining elements allow for provision of the various search parameters. For electricity, searches are possible on the basis of meter serial number or address or DPID. */
interface _NMIDiscoveryRequest extends BaseType {
  version?: r17;
  Address?: AustralianAddressSearch;
  DeliveryPointIdentifier?: number;
  JurisdictionCode: string;
  MeterSerialNumber?: string;
}
export interface NMIDiscoveryRequest extends _NMIDiscoveryRequest {
  constructor: { new (): NMIDiscoveryRequest };
}
export var NMIDiscoveryRequest: { new (): NMIDiscoveryRequest };

/** Application - NMI Data Access
 * TransactionExchange - NMI Discovery
 * TransactionGroup - NMID
 * Priority - High
 * Purpose - Provide the results of a search of the NMI Standing Data
 * Detail - Usage of the NMIStandingData type allows the transaction to carry variable content according to fuel and jurisdictional requirements. At least one Event element must be present in the response to indicate the success or otherwise of the search. */
interface _NMIDiscoveryResponse extends BaseType {
  version?: r17;
  Event: Event[];
  NMIStandingData?: NMIStandingData[];
}
export interface NMIDiscoveryResponse extends _NMIDiscoveryResponse {
  constructor: { new (): NMIDiscoveryResponse };
}
export var NMIDiscoveryResponse: { new (): NMIDiscoveryResponse };

/** MSATS Data Model Column - Attribute */
export type NMIRangesAttributeType = string;
type _NMIRangesAttributeType = Primitive._string;

/** Purpose - Row of the NMI Ranges table
 * MSATS Data Model Table - CATS_NMI_RANGES
 * Replication Table Name – NMIRanges */
interface _NMIRangesRow extends _ReplicationBaseRow {
  NMIBlockFrom?: string;
  NMIBlockTo?: string;
  NMIRangesAttribute: string;
  Participant?: PartyIdentifier;
}
export interface NMIRangesRow extends _NMIRangesRow {
  constructor: { new (): NMIRangesRow };
}
export var NMIRangesRow: { new (): NMIRangesRow };

/** Purpose - Row of the NMISearchRules table
 * MSATS Data Model Table - CATS_Discovery_Search_Rules
 * Replication Table Name - NMISearchRules */
interface _NMISearchRuleRow extends _ReplicationDateRangeRow {
  JurisdictionCode: string;
  NMIReturnCount: number;
  Role: string;
  SearchOnAddress: YesNo;
  SearchOnDPID: YesNo;
  SearchOnMeterIdentifier: YesNo;
}
export interface NMISearchRuleRow extends _NMISearchRuleRow {
  constructor: { new (): NMISearchRuleRow };
}
export var NMISearchRuleRow: { new (): NMISearchRuleRow };

/** Purpose - Basis for fuel specific NMI standing data. */
interface _NMIStandingData extends BaseType {
  effectiveDateTime?: Date;
  NMI?: NMI;
}
export interface NMIStandingData extends _NMIStandingData {
  constructor: { new (): NMIStandingData };
}
export var NMIStandingData: { new (): NMIStandingData };

/** Application - NMI Data Access
 * TransactionExchange - NMI Standing Data
 * TransactionGroup - NMID
 * Priority - High
 * Purpose - Request the current standing data for a particular NMI
 * Detail - The checksum should be provided with the NMI. */
interface _NMIStandingDataRequest extends BaseType {
  version?: r31;
  NMI: NMIWithChecksum;
  Reason?: string;
  Type?: string;
}
export interface NMIStandingDataRequest extends _NMIStandingDataRequest {
  constructor: { new (): NMIStandingDataRequest };
}
export var NMIStandingDataRequest: { new (): NMIStandingDataRequest };

/** The reason for performing NMI Discovery. This will be mandatory in transaction of NMI Discovery of Type 3
 * The reasons will be codified in the MSATS back end system. The reasons are not being implemented in schema as enumerations. That is to avoid making a schema version upgrade for a change to reason codes.
 * Currently the reasons proposed to be implemented in MSATS backend are
 * MCR - Missed CR1500 error
 * ITD - Incorrect transfer date error
 * NNS - New NMI Setup error
 * TRM - Transfer missed error
 * TRI - Transferred in error
 * OTR - Other transfer errors
 * SAB - Site Aabolishment */
export type NMIStandingDataRequestReason = string;
type _NMIStandingDataRequestReason = Primitive._string;

/** The type of NMI Discovery. This will be mandatory in transaction of NMI Discovery of Type 3.
 * The values will be codified in the MSATS back end system. The types are not being implemented in schema as enumerations. That is to avoid making a schema version upgrade for a change types.
 * Currently the reasons proposed to be implemented in MSATS backend are */
export type NMIStandingDataRequestType = string;
type _NMIStandingDataRequestType = Primitive._string;

/** Application - NMI Data Access
 * TransactionExchange - NMI Standing Data
 * TransactionGroup - NMID
 * Priority - High
 * Purpose - Provide the results of a request for the current standing data for a particular NMI
 * Detail - Usage of the NMIStandingData type allows the transaction to carry variable content according to fuel and jurisdictional requirements. At least one Event element must be present in the response to indicate the success or otherwise of the search. */
interface _NMIStandingDataResponse extends BaseType {
  version?: r39;
  Event: Event[];
  NMIStandingData?: NMIStandingData;
  PreviousReadDates?: PreviousReadDates;
}
export interface NMIStandingDataResponse extends _NMIStandingDataResponse {
  constructor: { new (): NMIStandingDataResponse };
}
export var NMIStandingDataResponse: { new (): NMIStandingDataResponse };

/** Schema - MeterDataManagement */
interface _NMIStandingDataUpdateNotification extends BaseType {
  version?: r9;
  CSVNMIStandingData: CSVRequestFormat;
  SingleNMIStandingData: NMIStandingData;
}
export interface NMIStandingDataUpdateNotification
  extends _NMIStandingDataUpdateNotification {
  constructor: { new (): NMIStandingDataUpdateNotification };
}
export var NMIStandingDataUpdateNotification: {
  new (): NMIStandingDataUpdateNotification;
};

/** Purpose - Status code of portions of NMI Standing Data
 * MSATS Data Model Column - NMIStatusCode */
export type NMIStatusCode = string;
type _NMIStatusCode = Primitive._string;

/** Purpose - Row of the NMIStatusCodes table
 * MSATS Data Model Table - CATS_NMI_Status_Codes
 * Replication Table Name - NMIStatusCodes */
interface _NMIStatusCodeRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface NMIStatusCodeRow extends _NMIStatusCodeRow {
  constructor: { new (): NMIStatusCodeRow };
}
export var NMIStatusCodeRow: { new (): NMIStatusCodeRow };

/** Purpose - Describe the status codes for portions of the NMI Standing Data
 * MSATS Data Model Column - NMIStatusDesc
 * Detail - The description is intended to assist in identification of the correct code. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type NMIStatusDescription = string;
type _NMIStatusDescription = Primitive._string;

/** Purpose - */
interface _NMITransactionBase extends BaseType {
  NMI?: NMI;
}
export interface NMITransactionBase extends _NMITransactionBase {
  constructor: { new (): NMITransactionBase };
}
export var NMITransactionBase: { new (): NMITransactionBase };

/** Purpose - National Metering Identifier with mandatory checksum
 * Detail - Used to identify electricity and gas metering points */
interface _NMIWithChecksum extends _NMIBase {
  checksum: number;
}
export interface NMIWithChecksum extends _NMIWithChecksum {
  constructor: { new (): NMIWithChecksum };
}
export var NMIWithChecksum: { new (): NMIWithChecksum };

/** Purpose - Row of the NodeHierarchy table
 * MSATS Data Model Table - NODE_HIERARCHY
 * Replication Table Name - NodeHierarchy */
interface _NodeHierarchyRow extends _ReplicationDateRangeRow {
  version?: r43;
  NodeName?: string;
  NodeType: string;
  ParentNodeName?: string;
  ParentNodeType?: string;
  SettlementIndicator?: string;
}
export interface NodeHierarchyRow extends _NodeHierarchyRow {
  constructor: { new (): NodeHierarchyRow };
}
export var NodeHierarchyRow: { new (): NodeHierarchyRow };

/** Purpose - base for generic string type that enforces non-whitespace content */
export type NonZeroLengthString = string;
type _NonZeroLengthString = Primitive._string;

/** Allows to specify the energy type abbreviation used in formulae to calculate the provided Energy Quantity. */
interface _NormalisationType extends _NetSystemLoadQuantityType {
  factor: number;
}
export interface NormalisationType extends _NormalisationType {
  constructor: { new (): NormalisationType };
}
export var NormalisationType: { new (): NormalisationType };

type NormalisationTypeFactorType = number;
type _NormalisationTypeFactorType = Primitive._number;

/** Assessment note */
interface _NOSAssessmentNoteType extends _NoteType {
  operationType?: NOSOperationType;
  /** NoteId provided by NEMMCO. Not for display only useful for update processing */
  NoteId: number;
  /** Note category. Provides for note separation on the basis of a summary category */
  Type: EnumAssessmentNoteType;
}
export interface NOSAssessmentNoteType extends _NOSAssessmentNoteType {
  constructor: { new (): NOSAssessmentNoteType };
}
export var NOSAssessmentNoteType: { new (): NOSAssessmentNoteType };

/** A NEMMCO assessment of one or more TNSP outages */
interface _NOSAssessmentType extends BaseType {
  operationType?: NOSOperationType;
  /** Provides for assessment information to be differentiated by time. */
  AssessmentDate: Date;
  /** A summary line identifying the Assessment conditions. Provides for assessment information to be differentiated on the basis of factors other than time (eg: Forecast demand) */
  AssessmentTitle: string;
  Constraint?: NOSConstraintType[];
  Issue?: NOSIssueType[];
  Limit?: NOSRiemnsLimitType[];
  Note?: NOSAssessmentNoteType[];
  /** The set of outages that the information on this Assessment Sheet applies to. NOTE: The information ONLY applies to the time period that the outages in this set overlap. */
  Outage?: NOSAssessmentTypeOutageType[];
  /** This Assessment Sheet now requires a review by NEMMCO. Information may be incorrect for reasons such as outages being rescheduled. */
  RequiresReview: boolean;
  /** Assessment Sheet Id is the unique id for an assessment. This id may be reused again after the assessment withdrawn. */
  SheetId: number;
}
export interface NOSAssessmentType extends _NOSAssessmentType {
  constructor: { new (): NOSAssessmentType };
}
export var NOSAssessmentType: { new (): NOSAssessmentType };

type NOSAssessmentTypeAssessmentTitleType = string;
type _NOSAssessmentTypeAssessmentTitleType = Primitive._string;

interface _NOSAssessmentTypeOutageType extends BaseType {
  operationType?: NOSOperationType;
  /** TODO The company provided id for the booking to which the information change pertains. */
  CompanyBookingId: string;
  /** TODO The company provided id for the outage to which the information change pertains. The outage will belong to the booking referenced by CompanyBookingId. */
  CompanyOutageId: string;
  /** TODO The B2B id of the TNSP own's the booking/outage. Only required if TNSP A kneeds to know about TNSP B's outage. */
  TNSPId?: PartyIdentifier;
}
interface NOSAssessmentTypeOutageType extends _NOSAssessmentTypeOutageType {
  constructor: { new (): NOSAssessmentTypeOutageType };
}

/** Requests for specific booking  and or outage information. */
interface _NOSBookingInfoRequest extends BaseType {
  version?: r16;
  BookingInfoRequestKey: BookingInfoRequestKeyType[];
}
export interface NOSBookingInfoRequest extends _NOSBookingInfoRequest {
  constructor: { new (): NOSBookingInfoRequest };
}
export var NOSBookingInfoRequest: { new (): NOSBookingInfoRequest };

/** When a booking submission is processed by NEMMCO a 'Booking Response' will be generated. */
interface _NOSBookingResponse extends BaseType {
  version?: r18;
  /** The response for an individual booking contains the booking's unique id, the operation attempted and  success/failure indicated by the event element. If the operation was successful none of the other booking sub-components (note, outage, etc) will be provided. */
  Booking: NOSBookingResponseBookingType[];
}
export interface NOSBookingResponse extends _NOSBookingResponse {
  constructor: { new (): NOSBookingResponse };
}
export var NOSBookingResponse: { new (): NOSBookingResponse };

interface _NOSBookingResponseBookingType extends _BookingResponseType {}
interface NOSBookingResponseBookingType extends _NOSBookingResponseBookingType {
  constructor: { new (): NOSBookingResponseBookingType };
}

/** A list of bookings submitted/re-submitted/withdrawn by the sending TNSP. */
interface _NOSBookingSubmission extends BaseType {
  version?: r38;
  Booking: BookingType[];
}
export interface NOSBookingSubmission extends _NOSBookingSubmission {
  constructor: { new (): NOSBookingSubmission };
}
export var NOSBookingSubmission: { new (): NOSBookingSubmission };

/** Braking Resistor */
interface _NOSBrakingResistorType extends _NOSEquipmentType {}
export interface NOSBrakingResistorType extends _NOSBrakingResistorType {
  constructor: { new (): NOSBrakingResistorType };
}
export var NOSBrakingResistorType: { new (): NOSBrakingResistorType };

/** Bus Bar */
interface _NOSBusType extends _NOSEquipmentType {}
export interface NOSBusType extends _NOSBusType {
  constructor: { new (): NOSBusType };
}
export var NOSBusType: { new (): NOSBusType };

/** Capacitor Bank */
interface _NOSCapacitorType extends _NOSEquipmentType {}
export interface NOSCapacitorType extends _NOSCapacitorType {
  constructor: { new (): NOSCapacitorType };
}
export var NOSCapacitorType: { new (): NOSCapacitorType };

/** Circuit Breaker */
interface _NOSCircuitBreakerType extends _NOSEquipmentType {}
export interface NOSCircuitBreakerType extends _NOSCircuitBreakerType {
  constructor: { new (): NOSCircuitBreakerType };
}
export var NOSCircuitBreakerType: { new (): NOSCircuitBreakerType };

/** Market constraint */
interface _NOSConstraintType extends BaseType {
  operationType?: NOSOperationType;
  /** The constraint set Description from the NEMMCO MMS */
  ConstraintSetDesc: string;
  /** The constraint set ID from the NEMMCO MMS. Set by NEMMCO. */
  ConstraintSetId: string;
  /** A comment about this constraint. Set by NEMMCO. */
  InvokeComment?: string;
}
export interface NOSConstraintType extends _NOSConstraintType {
  constructor: { new (): NOSConstraintType };
}
export var NOSConstraintType: { new (): NOSConstraintType };

type NOSConstraintTypeConstraintSetDescType = string;
type _NOSConstraintTypeConstraintSetDescType = Primitive._string;

type NOSConstraintTypeConstraintSetIdType = string;
type _NOSConstraintTypeConstraintSetIdType = Primitive._string;

type NOSConstraintTypeInvokeCommentType = string;
type _NOSConstraintTypeInvokeCommentType = Primitive._string;

/** Equipment information to lookup based on key fields */
interface _NOSEquipmentInfoRequest extends BaseType {
  version?: r16;
  EquipmentInfoRequestKey: EquipmentInfoRequestKeyType[];
}
export interface NOSEquipmentInfoRequest extends _NOSEquipmentInfoRequest {
  constructor: { new (): NOSEquipmentInfoRequest };
}
export var NOSEquipmentInfoRequest: { new (): NOSEquipmentInfoRequest };

/** When a 'Equipment Submission' is process by NEMMCO a 'Equipment Response' will be generated. This response will advise the request's initiator as to its success/failure. */
interface _NOSEquipmentResponse extends BaseType {
  version?: r14;
  /** The response for an individual Equipment Item contains the item's unique id, the operation attempted. Success/failure is indicated by the event element */
  EquipmentResponse: EquipmentResponseType[];
}
export interface NOSEquipmentResponse extends _NOSEquipmentResponse {
  constructor: { new (): NOSEquipmentResponse };
}
export var NOSEquipmentResponse: { new (): NOSEquipmentResponse };

/** Equipment to be add/updated. Note the optional "subject" attribute is for display purposes */
interface _NOSEquipmentSubmission extends BaseType {
  subject: string;
  version?: r18;
  NOSEquipment: EquipmentBaseType[];
}
export interface NOSEquipmentSubmission extends _NOSEquipmentSubmission {
  constructor: { new (): NOSEquipmentSubmission };
}
export var NOSEquipmentSubmission: { new (): NOSEquipmentSubmission };

type NOSEquipmentSubmissionSubjectType = string;
type _NOSEquipmentSubmissionSubjectType = Primitive._string;

/** Base type for a station resident equipment. NOTE: for all NOSEquipmentType descendants CompanyElementName must be unqiue for the company/station(s)/equipmentType */
interface _NOSEquipmentType extends _EquipmentBaseType {
  /** Equipment identifier such as line number, CB number, transformer number.  Used in the generation of the unique NEMMCONAME */
  Designation?: string;
  /** Station from contains the Company Element ID for the station that this item of plant is located at. This value is not updatable. */
  StationFromCompanyElementId?: string;
  /** HV voltage */
  Voltage?: number;
}
export interface NOSEquipmentType extends _NOSEquipmentType {
  constructor: { new (): NOSEquipmentType };
}
export var NOSEquipmentType: { new (): NOSEquipmentType };

type NOSEquipmentTypeDesignationType = string;
type _NOSEquipmentTypeDesignationType = Primitive._string;

type NOSEquipmentTypeVoltageType = number;
type _NOSEquipmentTypeVoltageType = _NOSVoltage;

/** Which fields in the booking/equipment submission relate to the error */
interface _NOSErrorFieldType extends BaseType {
  valueType: NOSErrorFieldTypeValueTypeType;
  Name: string;
  Value?: string;
}
export interface NOSErrorFieldType extends _NOSErrorFieldType {
  constructor: { new (): NOSErrorFieldType };
}
export var NOSErrorFieldType: { new (): NOSErrorFieldType };

type NOSErrorFieldTypeValueTypeType =
  | "string"
  | "integer"
  | "float"
  | "date"
  | "boolean"
  | "unavailable";
interface _NOSErrorFieldTypeValueTypeType extends Primitive._string {
  content: NOSErrorFieldTypeValueTypeType;
}

/** Generic NOS error relating to a booking/equipment submission */
interface _NOSErrorType extends BaseType {
  Code: EventCode;
  ErrorField?: NOSErrorFieldType[];
  Message: string;
}
export interface NOSErrorType extends _NOSErrorType {
  constructor: { new (): NOSErrorType };
}
export var NOSErrorType: { new (): NOSErrorType };

type NOSErrorTypeMessageType = string;
type _NOSErrorTypeMessageType = Primitive._string;

/** This transaction contains NOS information that may be a response to an information request transaction or generated by NEMMCO on the change of an assessment. */
interface _NOSInfoResponse extends BaseType {
  InfoType: NOSInfoType;
  version?: r38;
  Assessment?: NOSAssessmentType[];
  Booking?: BookingType[];
  NOSEquipment?: EquipmentBaseType[];
  OutageConstraint?: OutageConstraintType[];
  OutageStatus?: OutageStatusType[];
}
export interface NOSInfoResponse extends _NOSInfoResponse {
  constructor: { new (): NOSInfoResponse };
}
export var NOSInfoResponse: { new (): NOSInfoResponse };

/** Used to distinguish between submit, resubmit and withdraw of NOS data */
export type NOSInfoType =
  | "Booking Response"
  | "Equipment Response"
  | "Notification";
interface _NOSInfoType extends Primitive._string {
  content: NOSInfoType;
}

/** Isolator */
interface _NOSIsolatorType extends _NOSEquipmentType {}
export interface NOSIsolatorType extends _NOSIsolatorType {
  constructor: { new (): NOSIsolatorType };
}
export var NOSIsolatorType: { new (): NOSIsolatorType };

/** Assessment issue */
interface _NOSIssueType extends BaseType {
  operationType?: NOSOperationType;
  /** NOS generated unique key for each assessment issue */
  IssueId: number;
  /** Issue category. */
  IssueType: EnumAssessmentIssueType;
  /** This is the generic note type */
  Note: NoteType;
  /** Identifer of NEMMCO user that generated the Issue */
  RaisedBy: string;
  /** The date time that the NEMMCO user raised the issue */
  RaisedOn: Date;
  /** Set when an authorised NEMMCO user decides the issue is resolved */
  Resolved?: Date;
}
export interface NOSIssueType extends _NOSIssueType {
  constructor: { new (): NOSIssueType };
}
export var NOSIssueType: { new (): NOSIssueType };

/** A line connecting two stations */
interface _NOSLineType extends _NOSEquipmentType {
  /** Station to contains the company element  id for the 'To' station. This value is not updatable and may not have the same value as StationFromCompanyElementId. */
  StationToCompanyElementId?: string;
}
export interface NOSLineType extends _NOSLineType {
  constructor: { new (): NOSLineType };
}
export var NOSLineType: { new (): NOSLineType };

/** Load */
interface _NOSLoadType extends _NOSEquipmentType {}
export interface NOSLoadType extends _NOSLoadType {
  constructor: { new (): NOSLoadType };
}
export var NOSLoadType: { new (): NOSLoadType };

/** Used to distinguish between submit, resubmit and withdraw of NOS data */
export type NOSOperationType = "Submit" | "Resubmit" | "Withdraw";
interface _NOSOperationType extends Primitive._string {
  content: NOSOperationType;
}

/** Each Booking is made up of one or more Outages */
interface _NOSOutageType extends BaseType {
  changedBy?: string;
  operationType?: NOSOperationType;
  /** The actual finish date/time of the outage */
  ActualFinish?: Date;
  /** The actual start date/time of the outage */
  ActualStart?: Date;
  /** This field must contain a value that is unique to the booking it belongs to. This value is supplied by TNSP */
  CompanyOutageId: string;
  /** A TNSP provided reference code (display only). Typically this is a job number or switching sheet reference. Does not have to be unique to the Outage. */
  CompanyRefCode?: string;
  /** The number of minutes the company requires to return the affected items of plant to service during the day. A value less than 0 with be interpreted as "No recall" When the value is not supplied at all the interpretation is "Not applicable" Business rule is that both DayRecallMin and NightRecallMin cannot both be "NotApplicable" */
  DayRecallMin?: number;
  /** The TNSP has notified affected DNSPs */
  DNSPAware?: boolean;
  /** The TNSP has notified affected Geneators */
  GenAware?: boolean;
  /** The number of minutes the company requires to return the affected items of plant to service during the night. A value less than 0 with be interpreted as "No recall". When the value is not supplied at all the interpretation is "Not Applicable"Business rule is that both DayRecallMin and NightRecallMin cannot both be "NotApplicable" */
  NightRecallMin?: number;
  /** Notes attached to an outage apply only to that outage. When defining new notes the CompanyNoteId must be unique to the outage. Also the CompanyNoteId of a withdrawn note can not be reused. */
  Notes?: CompanyNotes;
  /** The TNSP has notified other affected TNSPs */
  OtherRegionAware?: boolean;
  /** The planned finish date/time of the outage. A value is required when creating a new outage. */
  PlanFinish?: Date;
  /** The planned start date/time of the outage. A value is required when creating a new outage. */
  PlanStart?: Date;
  /** Why the actual finish and the planned finish vary be more than 30 mins */
  ReasonVarPlanActualFinish?: EnumReasonVarPlanActualType;
  /** Why the actual start and the planned start vary by more than 30 mins */
  ReasonVarPlanActualStart?: EnumReasonVarPlanActualType;
  /** Reason outage has been withdrawn or modified. Required only on outage resubmission. */
  ResubmitReason?: EnumResubmitReasonType;
}
export interface NOSOutageType extends _NOSOutageType {
  constructor: { new (): NOSOutageType };
}
export var NOSOutageType: { new (): NOSOutageType };

type NOSOutageTypeCompanyRefCodeType = string;
type _NOSOutageTypeCompanyRefCodeType = _CompanyRefCodeType;

/** Reactor */
interface _NOSReactorType extends _NOSEquipmentType {}
export interface NOSReactorType extends _NOSReactorType {
  constructor: { new (): NOSReactorType };
}
export var NOSReactorType: { new (): NOSReactorType };

/** RIEMNS limit */
interface _NOSRiemnsLimitType extends BaseType {
  operationType?: NOSOperationType;
  /** Summary name for the Riemns Limit */
  Description: string;
  /** Generic Note Type incorporating a spreadsheet attachment containing a plain english description worksheet for the Riemns Limit. */
  Note: NoteType;
  /** NOS generated unique identifier for the Riemns Limit. */
  RiemnsLimitId: number;
  /** Summary Category for Riemns Limit. */
  Scope: string;
}
export interface NOSRiemnsLimitType extends _NOSRiemnsLimitType {
  constructor: { new (): NOSRiemnsLimitType };
}
export var NOSRiemnsLimitType: { new (): NOSRiemnsLimitType };

type NOSRiemnsLimitTypeDescriptionType = string;
type _NOSRiemnsLimitTypeDescriptionType = Primitive._string;

type NOSRiemnsLimitTypeScopeType = string;
type _NOSRiemnsLimitTypeScopeType = Primitive._string;

/** Static Var Compensator */
interface _NOSStaticVarCompensatorType extends _NOSEquipmentType {}
export interface NOSStaticVarCompensatorType
  extends _NOSStaticVarCompensatorType {
  constructor: { new (): NOSStaticVarCompensatorType };
}
export var NOSStaticVarCompensatorType: { new (): NOSStaticVarCompensatorType };

/** Substation. NOTE: with stations CompanyElementName must be unqiue of the submitting station. */
interface _NOSStationType extends _EquipmentBaseType {
  /** NEMMCO Abbrev is set by NEMMCO to aid in the generation of NEMMCO standard names for items of plant resident at this station. DO NOT set for submission */
  NEMMCOAbbrev?: string;
  /** The NEM region this station is located in. DO NOT set for submission */
  Region?: string;
}
export interface NOSStationType extends _NOSStationType {
  constructor: { new (): NOSStationType };
}
export var NOSStationType: { new (): NOSStationType };

type NOSStationTypeNEMMCOAbbrevType = string;
type _NOSStationTypeNEMMCOAbbrevType = Primitive._string;

type NOSStationTypeRegionType = string;
type _NOSStationTypeRegionType = Primitive._string;

/** Synchronous Condenser */
interface _NOSSynchronousCondenserType extends _NOSEquipmentType {}
export interface NOSSynchronousCondenserType
  extends _NOSSynchronousCondenserType {
  constructor: { new (): NOSSynchronousCondenserType };
}
export var NOSSynchronousCondenserType: { new (): NOSSynchronousCondenserType };

/** A line connecting three stations */
interface _NOSTeeLineType extends _NOSLineType {
  /** Station Tee contains the company element  id for the 'Tee' station. This value is not updatable and may not have the same value as StationFromCompanyElementId or StationToCompanyElementId. */
  StationTeeCompanyElementId?: string;
}
export interface NOSTeeLineType extends _NOSTeeLineType {
  constructor: { new (): NOSTeeLineType };
}
export var NOSTeeLineType: { new (): NOSTeeLineType };

/** Three winding Transformer */
interface _NOSThreeWindingTransformerType
  extends _NOSTwoWindingTransformerType {
  /** Tertiary winding voltage must be less than or equal to Voltage2 */
  Voltage3?: number;
}
export interface NOSThreeWindingTransformerType
  extends _NOSThreeWindingTransformerType {
  constructor: { new (): NOSThreeWindingTransformerType };
}
export var NOSThreeWindingTransformerType: {
  new (): NOSThreeWindingTransformerType;
};

type NOSThreeWindingTransformerTypeVoltage3Type = number;
type _NOSThreeWindingTransformerTypeVoltage3Type = _NOSVoltage;

/** Two winding Transformer */
interface _NOSTwoWindingTransformerType extends _NOSEquipmentType {
  /** Secondary winding voltage must be less than Voltage */
  Voltage2?: number;
}
export interface NOSTwoWindingTransformerType
  extends _NOSTwoWindingTransformerType {
  constructor: { new (): NOSTwoWindingTransformerType };
}
export var NOSTwoWindingTransformerType: {
  new (): NOSTwoWindingTransformerType;
};

type NOSTwoWindingTransformerTypeVoltage2Type = number;
type _NOSTwoWindingTransformerTypeVoltage2Type = _NOSVoltage;

/** Generator */
interface _NOSUnitType extends _NOSEquipmentType {}
export interface NOSUnitType extends _NOSUnitType {
  constructor: { new (): NOSUnitType };
}
export var NOSUnitType: { new (): NOSUnitType };

/** Common definition for user id fields through out NOS schema structures */
export type NOSUserIdType = string;
type _NOSUserIdType = Primitive._string;

/** Common voltage field definition */
export type NOSVoltage = number;
type _NOSVoltage = Primitive._number;

/** Standard NOS note. A note must have a PlainText and/or a FileAttach. */
interface _NoteType extends BaseType {
  /** Set by NEMMCO */
  CreatedBy?: string;
  /** Set by NEMMCO */
  CreatedOn?: Date;
  /** A single file attachment */
  FileAttach?: string;
  /** Required if file attachment included in note. */
  FileName?: string;
  /** The note as plain text */
  PlainText?: string;
}
export interface NoteType extends _NoteType {
  constructor: { new (): NoteType };
}
export var NoteType: { new (): NoteType };

type NoteTypeFileNameType = string;
type _NoteTypeFileNameType = Primitive._string;

type NoteTypePlainTextType = string;
type _NoteTypePlainTextType = Primitive._string;

interface _NoticeOfMeteringWorks extends BaseType {
  version?: r36;
  GeographicCoordinate?: GeographicCoordinate;
  MeterWorksDetail: WorksDetail;
  NMIStandingData: NMIStandingData;
  Notes?: string;
  NoticeOfWorksID: string;
}
export interface NoticeOfMeteringWorks extends _NoticeOfMeteringWorks {
  constructor: { new (): NoticeOfMeteringWorks };
}
export var NoticeOfMeteringWorks: { new (): NoticeOfMeteringWorks };

export type NoticeOfWorksID = string;
type _NoticeOfWorksID = Primitive._string;

export type NotificationNotes = string;
type _NotificationNotes = Primitive._string;

/** Purpose – Provide the parent holder for payload content for based on aseXML instances. */
interface _NotificationPayload extends BaseType {
  MsgAckNotified: MessageAcknowledgement;
  TransAckNotified: TransactionAcknowledgement;
  TransactionNotified: Transaction;
}
export interface NotificationPayload extends _NotificationPayload {
  constructor: { new (): NotificationPayload };
}
export var NotificationPayload: { new (): NotificationPayload };

export type NotificationStatus =
  | "SO Requested"
  | "SO Rejected"
  | "SO Completion"
  | "Accepted by Notified Party"
  | "Rejection by Notified Party"
  | "Notified Party Stopped";
interface _NotificationStatus extends Primitive._string {
  content: NotificationStatus;
}

/** Purpose - List Notified parties */
interface _NotifiedParties extends BaseType {
  NotifiedPartyID?: PartyIdentifier[];
}
export interface NotifiedParties extends _NotifiedParties {
  constructor: { new (): NotifiedParties };
}
export var NotifiedParties: { new (): NotifiedParties };

interface _NotifiedParty extends BaseType {
  version?: r36;
  ActualDateTime?: Date;
  NotificationStatus: NotificationStatus;
  RefTransaction: NotificationPayload;
  ScheduledDate: Date;
  ServiceOrder: ServiceOrderHeader;
  ServiceProvider: PartyIdentifier;
  ServiceRequestor: PartyIdentifier;
}
export interface NotifiedParty extends _NotifiedParty {
  constructor: { new (): NotifiedParty };
}
export var NotifiedParty: { new (): NotifiedParty };

/** Purpose - Network charge record type - "100" - NUOS */
interface _NUOS extends _BaseChargeItem {
  version?: r11;
  BillingPeriod: Period;
  Description: string;
  Quantity: number;
  Rate: number;
  ReadingType?: ReadingType;
  StepNumber?: number;
  TariffCode: string;
  TimeSplit: string;
  UnitOfMeasure: UnitsOfMeasure;
}
export interface NUOS extends _NUOS {
  constructor: { new (): NUOS };
}
export var NUOS: { new (): NUOS };

type NUOSStepNumberType = number;
type _NUOSStepNumberType = Primitive._number;

interface _OneWayNotification extends BaseType {
  version?: r25;
  CSVNotificationDetail: CSVDataWithName;
}
export interface OneWayNotification extends _OneWayNotification {
  constructor: { new (): OneWayNotification };
}
export var OneWayNotification: { new (): OneWayNotification };

/** Purpose - defines the time period as a date range with an optional EndData. */
interface _OpenPeriod extends BaseType {
  BeginDate: Date;
  EndDate?: Date;
}
export interface OpenPeriod extends _OpenPeriod {
  constructor: { new (): OpenPeriod };
}
export var OpenPeriod: { new (): OpenPeriod };

/** Purpose - Network charge record type - "931" - OustandingInvoiceDetail */
interface _OustandingInvoiceDetail extends BaseType {
  Amount: number;
  Comment?: SpecialComments;
  DisputeReceived: boolean;
  DueDate: Date;
  InvoiceDate: Date;
  InvoiceNumber: string;
  NMI: NMIWithChecksum;
}
export interface OustandingInvoiceDetail extends _OustandingInvoiceDetail {
  constructor: { new (): OustandingInvoiceDetail };
}
export var OustandingInvoiceDetail: { new (): OustandingInvoiceDetail };

/** All Market constraints related to an outage */
interface _OutageConstraintType extends BaseType {
  operationType?: NOSOperationType;
  /** The company provided id for the booking to which the information change pertains. */
  CompanyBookingId: string;
  /** The company provided id for the outage to which the information change pertains. The outage will belong to the booking referenced by CompanyBookingId. */
  CompanyOutageId: string;
  Constraint: OutageConstraintTypeConstraintType;
}
export interface OutageConstraintType extends _OutageConstraintType {
  constructor: { new (): OutageConstraintType };
}
export var OutageConstraintType: { new (): OutageConstraintType };

interface _OutageConstraintTypeConstraintType extends BaseType {
  /** The constraint set ID from the NEMMCO MMS. Set by NEMMCO. */
  ConstraintSetId: string;
  /** The date and time the constraint should become active in the NEM */
  Invoke: Date;
  /** The date and time the constraint should become inactive in the NEM */
  Revoke: Date;
}
interface OutageConstraintTypeConstraintType
  extends _OutageConstraintTypeConstraintType {
  constructor: { new (): OutageConstraintTypeConstraintType };
}

type OutageConstraintTypeConstraintTypeConstraintSetIdType = string;
type _OutageConstraintTypeConstraintTypeConstraintSetIdType = Primitive._string;

/** For reporting outage errors */
interface _OutageResponseType extends BaseType {
  operationType: NOSOperationType;
  CompanyOutageId: string;
  /** Errors at the outage level only. */
  Error?: NOSErrorType[];
  /** Individual notes belonging to this outage are identified by the CompanyNoteId. */
  Note?: CompanyNoteResponseType[];
}
export interface OutageResponseType extends _OutageResponseType {
  constructor: { new (): OutageResponseType };
}
export var OutageResponseType: { new (): OutageResponseType };

/** Container for Outages */
interface _Outages extends BaseType {
  Outage: NOSOutageType[];
}
export interface Outages extends _Outages {
  constructor: { new (): Outages };
}
export var Outages: { new (): Outages };

/** Outage status information to be sent to a TNSP */
interface _OutageStatusType extends BaseType {
  /** The user whose action (direct or indirect) caused the change in the outage''s status */
  ChangedBy: string;
  /** The time the status was set */
  ChangedOn: Date;
  /** The company provided id for the booking to which the information change pertains. */
  CompanyBookingId: string;
  /** The company provided id for the outage to which the information change pertains. The outage will belong to the booking referenced by CompanyBookingId. */
  CompanyOutageId: string;
  /** This is the time that the PTP request was made for. It does not neccessarily correspond with the time that the NEMMCO coordinator actually selects the PTP status (Ditto PTR). This field is only used for statuses of PTP and PTR. */
  RequestedFor?: Date;
  /** The Status of the outage as of the changed on date */
  Status: EnumOutageStatusType;
}
export interface OutageStatusType extends _OutageStatusType {
  constructor: { new (): OutageStatusType };
}
export var OutageStatusType: { new (): OutageStatusType };

/** Category of outage type */
export type OutageType = "Load Shed" | "Planned" | "Unplanned";
interface _OutageType extends Primitive._string {
  content: OutageType;
}

/** Purpose - Define the attributes for each attachment. */
interface _P2PAttachment extends BaseType {
  name: string;
  type: string;
}
export interface P2PAttachment extends _P2PAttachment {
  constructor: { new (): P2PAttachment };
}
export var P2PAttachment: { new (): P2PAttachment };

export type ParameterName = string;
type _ParameterName = Primitive._string;

export type ParameterValue = string;
type _ParameterValue = Primitive._string;

/** Participant's CLP and UAG data from network operator */
interface _ParticipantCLPandUAGNotification extends BaseType {
  version?: r34;
  ParticipantCLPAndUAGData: ParticipantCLPandUAGNotificationParticipantCLPAndUAGDataType[];
}
export interface ParticipantCLPandUAGNotification
  extends _ParticipantCLPandUAGNotification {
  constructor: { new (): ParticipantCLPandUAGNotification };
}
export var ParticipantCLPandUAGNotification: {
  new (): ParticipantCLPandUAGNotification;
};

interface _ParticipantCLPandUAGNotificationParticipantCLPAndUAGDataType
  extends BaseType {
  gasDate: Date;
  networkID: string;
  participantID: string;
  ChangeInLinepack: number;
  UnaccountedForGas: number;
}
interface ParticipantCLPandUAGNotificationParticipantCLPAndUAGDataType
  extends _ParticipantCLPandUAGNotificationParticipantCLPAndUAGDataType {
  constructor: {
    new (): ParticipantCLPandUAGNotificationParticipantCLPAndUAGDataType;
  };
}

/** Request for Participant Imbalance Amount */
interface _ParticipantImbalanceAmountRequest extends BaseType {
  version?: r34;
  ParticipantImbalanceAmountData: ParticipantImbalanceAmountRequestParticipantImbalanceAmountDataType;
}
export interface ParticipantImbalanceAmountRequest
  extends _ParticipantImbalanceAmountRequest {
  constructor: { new (): ParticipantImbalanceAmountRequest };
}
export var ParticipantImbalanceAmountRequest: {
  new (): ParticipantImbalanceAmountRequest;
};

interface _ParticipantImbalanceAmountRequestParticipantImbalanceAmountDataType
  extends BaseType {
  gasDate: Date;
  networkID: string;
  ParticipantImbalanceAmount: number;
}
interface ParticipantImbalanceAmountRequestParticipantImbalanceAmountDataType
  extends _ParticipantImbalanceAmountRequestParticipantImbalanceAmountDataType {
  constructor: {
    new (): ParticipantImbalanceAmountRequestParticipantImbalanceAmountDataType;
  };
}

/** Purpose - Definition for IAITParticipantImbalanceAmountRpt
 * Report Details - Notification of Allocated Participant Imbalance Amount. */
interface _ParticipantImbalanceAmountRpt extends _BaseReportFormat {
  ParticipantImbalanceAmountData: ParticipantImbalanceAmountRptParticipantImbalanceAmountDataType;
}
export interface ParticipantImbalanceAmountRpt
  extends _ParticipantImbalanceAmountRpt {
  constructor: { new (): ParticipantImbalanceAmountRpt };
}
export var ParticipantImbalanceAmountRpt: {
  new (): ParticipantImbalanceAmountRpt;
};

interface _ParticipantImbalanceAmountRptParticipantImbalanceAmountDataType
  extends BaseType {}
interface ParticipantImbalanceAmountRptParticipantImbalanceAmountDataType
  extends _ParticipantImbalanceAmountRptParticipantImbalanceAmountDataType {
  constructor: {
    new (): ParticipantImbalanceAmountRptParticipantImbalanceAmountDataType;
  };
}

interface _ParticipantQuantityType extends BaseType {
  Energy: QuantityType[];
  RoleAssignments?: RoleAssignments;
}
export interface ParticipantQuantityType extends _ParticipantQuantityType {
  constructor: { new (): ParticipantQuantityType };
}
export var ParticipantQuantityType: { new (): ParticipantQuantityType };

/** Purpose - Row of the Participant Roles table
 * MSATS Data Model Table - CATS_Participant_Roles
 * Replication Table Name - ParticipantRoles */
interface _ParticipantRolesRow extends _ReplicationDateRangeRow {
  ParticipantID: PartyIdentifier;
  Role: string;
  RoleCategory?: string;
}
export interface ParticipantRolesRow extends _ParticipantRolesRow {
  constructor: { new (): ParticipantRolesRow };
}
export var ParticipantRolesRow: { new (): ParticipantRolesRow };

/** Purpose - Row of the Participants table
 * MSATS Data Model Table - CATS_Participants
 * Replication Table Name - Participants */
interface _ParticipantRow extends _ReplicationDateRangeRow {
  Address1?: string;
  Address2?: string;
  Address3?: string;
  City?: string;
  ContactMobile?: string;
  ContactPhone: string;
  ContactPhoneArea: string;
  Country?: string;
  DeregistrationCode?: string;
  Name: string;
  ParticipantID: PartyIdentifier;
  Postcode?: string;
  ShortName?: string;
  State?: string;
}
export interface ParticipantRow extends _ParticipantRow {
  constructor: { new (): ParticipantRow };
}
export var ParticipantRow: { new (): ParticipantRow };

/** Purpose - container for Participant System Status */
interface _ParticipantSystemsStatus extends BaseType {
  ParticipantSystemStatus: ParticipantSystemStatus[];
}
export interface ParticipantSystemsStatus extends _ParticipantSystemsStatus {
  constructor: { new (): ParticipantSystemsStatus };
}
export var ParticipantSystemsStatus: { new (): ParticipantSystemsStatus };

/** Purpose - container for Participant System Status */
interface _ParticipantSystemStatus extends BaseType {
  Box?: string;
  Description?: string;
  HeartbeatTime: Date;
  ModeType: string;
  Reason?: string;
  Resolution?: string;
  StartTime: Date;
  Status: string;
  System: string;
  TransactionGroups?: TransactionGroups;
}
export interface ParticipantSystemStatus extends _ParticipantSystemStatus {
  constructor: { new (): ParticipantSystemStatus };
}
export var ParticipantSystemStatus: { new (): ParticipantSystemStatus };

/** Purpose - Identify a communicating party within aseXML
 * Detail - This type allows identification of an entity involved within the energy industry.
 *
 * The context attribute allows differentiation between identification mechanisms for parties.
 *
 * A value of "ABN" indicates that the value should be treated as an Australian Business Number.
 *
 * There is no default. If the context attribute is not provided, the PartyIdentifier should be interpreted according to the rules for the market in which it is being used. */
interface _PartyIdentifier extends Primitive._string {
  context: PartyIdentifierContextType;
  description: string;
}
export interface PartyIdentifier extends _PartyIdentifier {
  constructor: { new (): PartyIdentifier };
}
export var PartyIdentifier: { new (): PartyIdentifier };

type PartyIdentifierContextType = "ABN";
interface _PartyIdentifierContextType extends Primitive._string {
  content: PartyIdentifierContextType;
}

interface _PayloadExceptionAlert extends BaseType {
  version?: r37;
  AlertDateTime: Date;
  Event: Event;
  InitiatingAPIReference?: APIReference;
  InitiatingMessageID?: string;
  MessageContextID: string;
  MessageID?: string;
  MessageInitiator: PartyIdentifier;
  MessageType: HubMessageType;
}
export interface PayloadExceptionAlert extends _PayloadExceptionAlert {
  constructor: { new (): PayloadExceptionAlert };
}
export var PayloadExceptionAlert: { new (): PayloadExceptionAlert };

/** Purpose - defines the payment data for the  items paid by the retailer */
interface _PaymentData extends BaseType {
  Gross: number;
  GST?: number;
  Net: number;
}
export interface PaymentData extends _PaymentData {
  constructor: { new (): PaymentData };
}
export var PaymentData: { new (): PaymentData };

/** Purpose - defines the time period as a date range. */
interface _Period extends BaseType {
  BeginDate: Date;
  EndDate: Date;
}
export interface Period extends _Period {
  constructor: { new (): Period };
}
export var Period: { new (): Period };

/** Purpose - Define a person's name
 * Detail - This format follows AS4590. By default, a legal name is assumed. */
interface _PersonName extends BaseType {
  nameType: PersonNameType;
  FamilyName: string;
  GivenName: string[];
  NameSuffix?: string[];
  NameTitle: string[];
}
export interface PersonName extends _PersonName {
  constructor: { new (): PersonName };
}
export var PersonName: { new (): PersonName };

/** Purpose - Define a person's family name as per Australian Standard AS4590 */
export type PersonNameFamily = string;
type _PersonNameFamily = Primitive._string;

/** Purpose - Define a person's given name as per Australian Standard AS4590 */
export type PersonNameGiven = string;
type _PersonNameGiven = Primitive._string;

/** Purpose - Define a person's name suffix as per Australian Standard AS4590 */
export type PersonNameSuffix = string;
type _PersonNameSuffix = Primitive._string;

/** Purpose - Define a person's title as per Australian Standard AS4590 */
export type PersonNameTitle = string;
type _PersonNameTitle = Primitive._string;

/** Purpose - Define the types of people's names as per Australian Standard AS4590 */
export type PersonNameType =
  | "LGL"
  | "MDN"
  | "BTH"
  | "TRB"
  | "PRF"
  | "AKA"
  | "XFR"
  | "STG";
interface _PersonNameType extends Primitive._string {
  content: PersonNameType;
}

/** A unique identifier for a Pipeline */
export type PipelineID = string;
type _PipelineID = Primitive._string;

export type PipelineIdentifier = string;
type _PipelineIdentifier = Primitive._string;

interface _PlannedInterruptionNotification extends BaseType {
  version?: r41;
  Duration: string;
  EndDate?: Date;
  NMI: NMI;
  Notes?: string;
  ReasonForInter?: ReasonForInter;
  ServiceOrderNumber?: string;
  StartDate: Date;
  StartTime: string;
}
export interface PlannedInterruptionNotification
  extends _PlannedInterruptionNotification {
  constructor: { new (): PlannedInterruptionNotification };
}
export var PlannedInterruptionNotification: {
  new (): PlannedInterruptionNotification;
};

/** This information is used to help find remote meters that may not be easily identified by address.   Often it is easier to find the site via reference to a network pole number (generally in sequence on a feeder).  This is required in standing data as the Franchise market Retailer still carries responsibility for performing site activities for some areas of the network. */
export type PoleNumber = string;
type _PoleNumber = Primitive._string;

/** Schema - Gas */
export type PressureCorrectionFactor = number;
type _PressureCorrectionFactor = Primitive._number;

/** Purpose - Date and quality of a previous NMI reading */
interface _PreviousReadDate extends BaseType {
  ReadDate: Date;
  ReadQuality: string;
}
export interface PreviousReadDate extends _PreviousReadDate {
  constructor: { new (): PreviousReadDate };
}
export var PreviousReadDate: { new (): PreviousReadDate };

type PreviousReadDateReadQualityType = string;
type _PreviousReadDateReadQualityType = Primitive._string;

/** Purpose - List dates of previous NMI readings */
interface _PreviousReadDates extends BaseType {
  Event: Event;
  PreviousReadDate: PreviousReadDate[];
}
export interface PreviousReadDates extends _PreviousReadDates {
  constructor: { new (): PreviousReadDates };
}
export var PreviousReadDates: { new (): PreviousReadDates };

/** Indicates primary network voltage the metering installation is connected to
 * Version 1.0 additions
 * - 230V
 * - 400V
 * - 11KV
 * - 22KV
 * - 33KV
 * - 66KV
 * - 132KV
 * - Other HV */
export type PrimaryVoltage =
  | "230V"
  | "400V"
  | "11KV"
  | "22KV"
  | "33KV"
  | "66KV"
  | "132KV"
  | "Other HV";
interface _PrimaryVoltage extends Primitive._string {
  content: PrimaryVoltage;
}

/** Purpose - Priority indication
 * Detail - Note that these enumerations are case sensitive. */
export type Priority = "Low" | "Medium" | "High";
interface _Priority extends Primitive._string {
  content: Priority;
}

interface _Product extends BaseType {
  Code: string[];
}
export interface Product extends _Product {
  constructor: { new (): Product };
}
export var Product: { new (): Product };

type ProductCodeType = string;
type _ProductCodeType = Primitive._string;

/** Purpose - Describe a profile
 * MSATS Data Model Column - ProfileNameDesc
 * Detail - The description is intended to assist in identification of the correct profile. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type ProfileDescription = string;
type _ProfileDescription = Primitive._string;

/** Purpose - Identify a profile
 * MSATS Data Model Column - ProfileNameID
 * Detail - Profiles are applied to consumption meter reads to massage them into a form suitable for settlement of a market based on shorter intervals than provided by the meter read cycle. */
export type ProfileName = string;
type _ProfileName = Primitive._string;

/** Purpose - Row of the ProfileNames table
 * MSATS Data Model Table - CATS_Profile_Names_see_MDM
 * Replication Table Name - ProfileNames */
interface _ProfileRow extends _ReplicationDateRangeRow {
  Description: string;
  Name: string;
}
export interface ProfileRow extends _ProfileRow {
  constructor: { new (): ProfileRow };
}
export var ProfileRow: { new (): ProfileRow };

interface _PTPDataExchange extends BaseType {
  version?: r36;
  AttachmentList?: AttachmentList;
  FreeFormData: any;
}
export interface PTPDataExchange extends _PTPDataExchange {
  constructor: { new (): PTPDataExchange };
}
export var PTPDataExchange: { new (): PTPDataExchange };

/** Public lighting guaranteed service level type fault information */
interface _PublicLightingGSL extends BaseType {
  indicator: PublicLightingGSLIndicator;
  /** The actual address that the public lighting is opposite (in front of) */
  Address: AustralianAddress;
  /** Date by which the public lighting will (must) be fixed */
  FixedByDate: Date;
}
export interface PublicLightingGSL extends _PublicLightingGSL {
  constructor: { new (): PublicLightingGSL };
}
export var PublicLightingGSL: { new (): PublicLightingGSL };

/** Public lighting guaranteed service level type fault */
export type PublicLightingGSLIndicator =
  | "Adjacent"
  | "Not Applicable"
  | "Opposite";
interface _PublicLightingGSLIndicator extends Primitive._string {
  content: PublicLightingGSLIndicator;
}

/** Purpose - Used to clearly indicate the purpose of visit
 * Version 1.0 additions
 * - New connection
 * - Additional Meter
 * - Part of BTS Temp to Perm
 * - Part of supply alteration
 * - Bidirectional flows at premises
 * - Bypassed Customer
 * - Communications Remove
 * - Communications Install
 * - Revenue Protection
 * - Site Abolishment
 * - Family Failure
 * - Fault
 * - Retailer Led
 * - None
 * - Other */
export type PurposeOfRequest =
  | "New connection"
  | "Additional Meter"
  | "Part of BTS Temp to Perm"
  | "Part of supply alteration"
  | "Bidirectional flows at premises"
  | "Bypassed Customer"
  | "Communications Remove"
  | "Communications Install"
  | "Revenue Protection"
  | "Site Abolishment"
  | "Family Failure"
  | "Fault"
  | "Retailer Led"
  | "None"
  | "Other";
interface _PurposeOfRequest extends Primitive._string {
  content: PurposeOfRequest;
}

interface _QuantityNotification extends BaseType {
  Quantities: ParticipantQuantityType[];
}
export interface QuantityNotification extends _QuantityNotification {
  constructor: { new (): QuantityNotification };
}
export var QuantityNotification: { new (): QuantityNotification };

/** A quantity of Gas measured in Megajoules.
 * Sometimes the corrections/adjustments could be negative. */
export type QuantityOfGasMJ = number;
type _QuantityOfGasMJ = Primitive._number;

interface _QuantityType extends BaseType {
  gasDay: Date;
  Subnets: QuantityTypeSubnetsType;
}
export interface QuantityType extends _QuantityType {
  constructor: { new (): QuantityType };
}
export var QuantityType: { new (): QuantityType };

interface _QuantityTypeSubnetsType extends BaseType {
  Pipeline?: string;
  SubnetQty: SubnetQuantityType[];
}
interface QuantityTypeSubnetsType extends _QuantityTypeSubnetsType {
  constructor: { new (): QuantityTypeSubnetsType };
}

/** Schema - Common */
export type r10 = "r10";
interface _r10 extends _ReleaseIdentifier {
  content: r10;
}

/** Schema - Common */
export type r11 = "r11";
interface _r11 extends _ReleaseIdentifier {
  content: r11;
}

/** Schema - Common */
export type r11_p1 = "r11_p1";
interface _r11_p1 extends _ReleaseIdentifier {
  content: r11_p1;
}

/** Purpose - Release r12 identifier */
export type r12 = "r12";
interface _r12 extends _ReleaseIdentifier {
  content: r12;
}

/** Purpose - Release r13 identifier */
export type r13 = "r13";
interface _r13 extends _ReleaseIdentifier {
  content: r13;
}

/** Purpose - Release r14 identifier */
export type r14 = "r14";
interface _r14 extends _ReleaseIdentifier {
  content: r14;
}

/** Purpose - Release r15 identifier */
export type r15 = "r15";
interface _r15 extends _ReleaseIdentifier {
  content: r15;
}

/** Purpose - Release r16 identifier */
export type r16 = "r16";
interface _r16 extends _ReleaseIdentifier {
  content: r16;
}

/** Purpose - Release r17 identifier */
export type r17 = "r17";
interface _r17 extends _ReleaseIdentifier {
  content: r17;
}

/** Purpose - Release r18 identifier */
export type r18 = "r18";
interface _r18 extends _ReleaseIdentifier {
  content: r18;
}

/** Purpose - Release r19 identifier */
export type r19 = "r19";
interface _r19 extends _ReleaseIdentifier {
  content: r19;
}

/** Purpose - Release r20 identifier */
export type r20 = "r20";
interface _r20 extends _ReleaseIdentifier {
  content: r20;
}

/** Purpose - Release r21 identifier */
export type r21 = "r21";
interface _r21 extends _ReleaseIdentifier {
  content: r21;
}

/** Purpose - Release r22 identifier */
export type r22 = "r22";
interface _r22 extends _ReleaseIdentifier {
  content: r22;
}

/** Purpose - Release r23 identifier. This release contains extensions for High Speed Monitoring (HSM) of  NEM plant. There are new transactions for for discovery, capability and health of HSM monitors configured for continuous data, and request and transmission of data from those monitors. */
export type r23 = "r23";
interface _r23 extends _ReleaseIdentifier {
  content: r23;
}

/** Purpose - Release r24 identifier */
export type r24 = "r24";
interface _r24 extends _ReleaseIdentifier {
  content: r24;
}

/** Purpose - Release r25 identifier */
export type r25 = "r25";
interface _r25 extends _ReleaseIdentifier {
  content: r25;
}

/** Purpose - Release r26 identifier. This release contains extensions for discovery, capability and health of HSM monitors configured for triggered data. There are new transactions for reporting, request and transmission of HSM triggered data. */
export type r26 = "r26";
interface _r26 extends _ReleaseIdentifier {
  content: r26;
}

/** Purpose - Release r27 identifier. This release extends the length of element COCNumber to 8. */
export type r27 = "r27";
interface _r27 extends _ReleaseIdentifier {
  content: r27;
}

/** Purpose - Release r28 identifier. This release contains extensions for Electricity Market Management Systems and MSATS Web Services */
export type r28 = "r28";
interface _r28 extends _ReleaseIdentifier {
  content: r28;
}

/** Purpose - Release r29 identifier. This release adds CustomerClassificationCode and CustomerThresholdCode to GasMasterStandingData */
export type r29 = "r29";
interface _r29 extends _ReleaseIdentifier {
  content: r29;
}

/** Purpose - Release r3 identifier */
export type r3 = "r3";
interface _r3 extends _ReleaseIdentifier {
  content: r3;
}

/** Purpose - Release r30 identifier. This release adds AMDQ Transactions to Gas Wholesale Market to support Web Exchanger Web Services */
export type r30 = "r30";
interface _r30 extends _ReleaseIdentifier {
  content: r30;
}

/** Purpose - Release r31 identifier. The release makes the IHNS element in GasIHNType optional */
export type r31 = "r31";
interface _r31 extends _ReleaseIdentifier {
  content: r31;
}

/** Purpose - Release r32 identifier. */
export type r32 = "r32";
interface _r32 extends _ReleaseIdentifier {
  content: r32;
}

/** Purpose - Release r33 identifier. */
export type r33 = "r33";
interface _r33 extends _ReleaseIdentifier {
  content: r33;
}

/** Purpose - Release r34 identifier. */
export type r34 = "r34";
interface _r34 extends _ReleaseIdentifier {
  content: r34;
}

/** Purpose - Release r35 identifier. */
export type r35 = "r35";
interface _r35 extends _ReleaseIdentifier {
  content: r35;
}

/** Purpose - Release r36 identifier. */
export type r36 = "r36";
interface _r36 extends _ReleaseIdentifier {
  content: r36;
}

/** Purpose - Release r37 identifier. */
export type r37 = "r37";
interface _r37 extends _ReleaseIdentifier {
  content: r37;
}

/** Purpose - Release r38 identifier. */
export type r38 = "r38";
interface _r38 extends _ReleaseIdentifier {
  content: r38;
}

/** Purpose - Release r39 identifier. */
export type r39 = "r39";
interface _r39 extends _ReleaseIdentifier {
  content: r39;
}

/** Purpose - Release r39_p1 identifier. Patch for release 39 */
export type r39_p1 = "r39_p1";
interface _r39_p1 extends _ReleaseIdentifier {
  content: r39_p1;
}

/** Purpose - Release r4 identifier */
export type r4 = "r4";
interface _r4 extends _ReleaseIdentifier {
  content: r4;
}

/** Purpose - Release r40 identifier. */
export type r40 = "r40";
interface _r40 extends _ReleaseIdentifier {
  content: r40;
}

/** Purpose - Release r41 identifier. */
export type r41 = "r41";
interface _r41 extends _ReleaseIdentifier {
  content: r41;
}

/** Purpose - Release r42 identifier. */
export type r42 = "r42";
interface _r42 extends _ReleaseIdentifier {
  content: r42;
}

/** Purpose - Release r43 identifier. */
export type r43 = "r43";
interface _r43 extends _ReleaseIdentifier {
  content: r43;
}

/** Purpose - Release r44 identifier. */
export type r44 = "r44";
interface _r44 extends _ReleaseIdentifier {
  content: r44;
}

/** Purpose - Release r5 identifier */
export type r5 = "r5";
interface _r5 extends _ReleaseIdentifier {
  content: r5;
}

/** Purpose - Release r6 identifier */
export type r6 = "r6";
interface _r6 extends _ReleaseIdentifier {
  content: r6;
}

/** Purpose - Release r7 identifier */
export type r7 = "r7";
interface _r7 extends _ReleaseIdentifier {
  content: r7;
}

/** Purpose - Release r8 identifier */
export type r8 = "r8";
interface _r8 extends _ReleaseIdentifier {
  content: r8;
}

/** Schema - Common */
export type r9 = "r9";
interface _r9 extends _ReleaseIdentifier {
  content: r9;
}

/** Purpose - Defines numeric data type restricted to 9.5 digits */
export type Rate = number;
type _Rate = Primitive._number;

/** Purpose - Define meter reading type used in calculating the charged amount. */
export type ReadingType = "Actual" | "Substitute";
interface _ReadingType extends Primitive._string {
  content: ReadingType;
}

/** Purpose - Define the fixed Reasons for interruption
 * Version 1.0 additions
 * - Meter Exchange - Individual
 * - Meter Exchange - Rollout
 * - Meter Replacement - Family Maintenance
 * - Meter Test
 * - Meter Fault Investigation
 * - Distribution Works
 * - Meter Installation - Additional
 * - Install Controlled Load
 * - Remove Meter
 * - Move Meter
 * - Meter Reconfiguration
 * - Other
 * Version 1.1 update
 * - Replace en dash in Meter Replacement - Family Maintenance with proper hyphen due to UTF-8 limitation.
 * Version 1.2 update
 * - Addition of new enum values as per B2B v3.4 and v3.5 Consultation.
 * Version 3.0.1
 * - Replace elongated dash in Meter Installation – Additional with standard hyphen. */
export type ReasonForInter =
  | "Meter Exchange - Individual"
  | "Meter Exchange - Rollout"
  | "Meter Replacement - Family Maintenance"
  | "Meter Test"
  | "Meter Fault Investigation"
  | "Distribution Works"
  | "Meter Installation - Additional"
  | "Install Controlled Load"
  | "Remove Meter"
  | "Move Meter"
  | "Meter Reconfiguration"
  | "Other";
interface _ReasonForInter extends Primitive._string {
  content: ReasonForInter;
}

/** Schema - Common */
export type ReasonForNoAccess =
  | "Access Overgrown"
  | "Can't Locate Meter"
  | "Damaged Meter"
  | "Dial Out of Alignment"
  | "Dirty Dial"
  | "Gate Locked"
  | "Key Required"
  | "Locked and No Answer"
  | "Meter Changed"
  | "Meter Obstructed"
  | "Meter Removed"
  | "Other"
  | "Refused Access"
  | "Savage Dog";
interface _ReasonForNoAccess extends Primitive._string {
  content: ReasonForNoAccess;
}

/** Purpose - Define the fixed Reasons for Notice
 * Version 1.0 additions
 * - Meter Family Failure
 * - Accuracy Failure
 * - Timeswitch/Controlled Load Failure
 * - Contactor Failure
 * - No Display
 * - Communication Failure
 * - Meter Verification
 * - Malfunction
 * - Area Event
 * - Metrology Threshold Breach
 * - Meter Bypassed
 * - Physical Damage
 * - Theft/Tampering
 * - Other */
export type ReasonForNotice =
  | "Meter Family Failure"
  | "Accuracy Failure"
  | "Timeswitch/Controlled Load Failure"
  | "Contactor Failure"
  | "No Display"
  | "Communication Failure"
  | "Meter Verification"
  | "Malfunction"
  | "Area Event"
  | "Metrology Threshold Breach"
  | "Meter Bypassed"
  | "Physical Damage"
  | "Theft/Tampering"
  | "Other";
interface _ReasonForNotice extends Primitive._string {
  content: ReasonForNotice;
}

/** Purpose - Defines the rebate type for the concession details */
export type RebateType =
  | "Pension Card"
  | "Health Care Card"
  | "Health Benefit Card"
  | "Veteran Affairs Card";
interface _RebateType extends Primitive._string {
  content: RebateType;
}

/** Purpose - Provide a unique identifier to acknowledge a message or transaction.
 * Detail - A receipt identifier is generated by the receiver of an aseXML message or transaction. Its purpose is to provide the sender with a string that can be quoted when inquiring with regard to the progress of processing for a message or transaction. As implied by the name, it is the sender's guarantee that the reciever will process the message or transaction.
 *
 * Note that receipt identifiers do not have to be globally unique, only unique to a particular receiver. However, the length has been chosen such that UUIDs can be used as receipt identifiers if considered appropriate, guaranteeing global uniqueness. */
export type ReceiptIdentifier = string;
type _ReceiptIdentifier = _UniqueIdentifier;

interface _ReconciliationNotification extends BaseType {
  version?: r31;
  DeemedInjection: QuantityNotification;
  DeemedWithdrawal: QuantityNotification;
  EstimatedTotalWithdrawal: QuantityNotification;
  GatePointApportionment: QuantityNotification;
  HeatingDegreeDay: QuantityNotification;
  HistoricalAmount: QuantityNotification;
  NetSystemLoad: QuantityNotification;
  ReconciliationAmount: QuantityNotification;
  TotalAmount: QuantityNotification;
}
export interface ReconciliationNotification
  extends _ReconciliationNotification {
  constructor: { new (): ReconciliationNotification };
}
export var ReconciliationNotification: { new (): ReconciliationNotification };

/** Purpose - Defines the record count data type as a string of numeric characters in format 10. */
export type RecordCount = number;
type _RecordCount = Primitive._number;

/** Purpose - Use to indicate whether it is customer Initiated and regulatory timeframes apply, or not.
 * Version 1.0 additions
 * - Customer Initiated
 * - Malfunction
 * - New Meter Deployment
 * - Shared Fuse
 * - Other */
export type RegClassification =
  | "Customer Initiated"
  | "Malfunction"
  | "New Meter Deployment"
  | "Shared Fuse"
  | "Other";
interface _RegClassification extends Primitive._string {
  content: RegClassification;
}

/** Purpose - Meter Register Index value as standalone. */
export type RegisterIndexValue = string;
type _RegisterIndexValue = Primitive._string;

/** Purpose - Identify a release of aseXML
 * Details - Release identifiers are used extensively in aseXML to enable versioning of transactions. */
export type ReleaseIdentifier = string;
type _ReleaseIdentifier = Primitive._string;

interface _RemittanceData extends BaseType {
  Header: NETBHeader;
  RemittanceItems: RemittanceDataRemittanceItemsType;
  RemittanceSummary: RemittanceSummary;
}
export interface RemittanceData extends _RemittanceData {
  constructor: { new (): RemittanceData };
}
export var RemittanceData: { new (): RemittanceData };

interface _RemittanceDataRemittanceItemsType extends BaseType {
  RemittanceItem: RemittanceDetail[];
}
interface RemittanceDataRemittanceItemsType
  extends _RemittanceDataRemittanceItemsType {
  constructor: { new (): RemittanceDataRemittanceItemsType };
}

/** Purpose - Network charge record type - "810, 921" - RemittanceDetail */
interface _RemittanceDetail extends BaseType {
  DatePaid?: Date;
  InvoiceNumber: string;
  NMI: NMIWithChecksum;
  Payment: PaymentData;
  PaymentReference?: string;
  TotalPaid: number;
  TransactionID: string;
}
export interface RemittanceDetail extends _RemittanceDetail {
  constructor: { new (): RemittanceDetail };
}
export var RemittanceDetail: { new (): RemittanceDetail };

type RemittanceDetailPaymentReferenceType = string;
type _RemittanceDetailPaymentReferenceType = Primitive._string;

/** Application - Network Billing
 * TransactionExchange -
 * TransactionGroup - NETB
 * Priority - Medium
 * Purpose - Submit remittance details to the Distributor
 *
 * NEM
 * B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * B2B_NB_SA_IP_v1-0_-_Effective_13Apr2003.doc
 * B2B_NB_Vic_IP_v1-1_-_Effective_13Jan2002.doc
 * This complex type defines the transaction "NBREMITT"
 * Only Gross Amount of Payment data is required for this transaction as per B2B_NB_NSW_IP_v2.3_-_Effective_from_9Dec2002.doc
 * This transaction is for use only in SA, NSW and VIC. */
interface _RemittanceNotification extends BaseType {
  version?: r11_p1;
  CSVRemittance: CSVRequestFormat;
  RemittanceData: RemittanceData;
}
export interface RemittanceNotification extends _RemittanceNotification {
  constructor: { new (): RemittanceNotification };
}
export var RemittanceNotification: { new (): RemittanceNotification };

/** Purpose - Network charge record type - "820, 922" - RemittanceSummary */
interface _RemittanceSummary extends BaseType {
  Payment: PaymentData;
  RecordCount: number;
  TotalPaid: number;
}
export interface RemittanceSummary extends _RemittanceSummary {
  constructor: { new (): RemittanceSummary };
}
export var RemittanceSummary: { new (): RemittanceSummary };

/** Schema - RemoteService
 * r36.1  WL.    Change Meters element to be optional. */
interface _RemoteServiceData extends BaseType {
  FromDateTime?: Date;
  Meters?: MeterSerialNumbers;
  NMI: NMI;
  RequestCode: string;
  RequestID: string;
  ResponseFormat: string;
  ServiceType: string;
  ToDateTime?: Date;
  UserDef?: UserDefData;
}
export interface RemoteServiceData extends _RemoteServiceData {
  constructor: { new (): RemoteServiceData };
}
export var RemoteServiceData: { new (): RemoteServiceData };

/** Prior to commencing the use of the Remote Service Process the Initiator and Recipient must agree the scope of the service(s) and the format of the response to the service request. */
interface _RemoteServiceRequest extends BaseType {
  version?: r36;
  RemoteServiceData: RemoteServiceData;
}
export interface RemoteServiceRequest extends _RemoteServiceRequest {
  constructor: { new (): RemoteServiceRequest };
}
export var RemoteServiceRequest: { new (): RemoteServiceRequest };

/** This element is used to define the RemoteServiceRequest code. */
export type RemoteServiceRequestCode = string;
type _RemoteServiceRequestCode = Primitive._string;

/** Prior to commencing the use of the Remote Service Process the Initiator and Recipient must agree the scope of the service(s) and the format of the response to the service request. */
interface _RemoteServiceResponse extends BaseType {
  version?: r36;
  RemoteServiceData: RemoteServiceData;
  ResponseData: RemoteServiceResponseData;
}
export interface RemoteServiceResponse extends _RemoteServiceResponse {
  constructor: { new (): RemoteServiceResponse };
}
export var RemoteServiceResponse: { new (): RemoteServiceResponse };

/** Schema - RemoteService */
interface _RemoteServiceResponseData extends BaseType {
  Event?: Event;
  Product?: Product;
  ResponsePayload?: ResponsePayload;
}
export interface RemoteServiceResponseData extends _RemoteServiceResponseData {
  constructor: { new (): RemoteServiceResponseData };
}
export var RemoteServiceResponseData: { new (): RemoteServiceResponseData };

/** This element is used to define the RemoteService Type. */
export type RemoteServiceType = string;
type _RemoteServiceType = Primitive._string;

/** Purpose - Define the structure of removed equipment. */
interface _RemovedMeteringEquipment extends BaseType {
  MeteringEquipment: NMIStandingData;
  RemovedEquipmentType: MeterEquipmentType;
}
export interface RemovedMeteringEquipment extends _RemovedMeteringEquipment {
  constructor: { new (): RemovedMeteringEquipment };
}
export var RemovedMeteringEquipment: { new (): RemovedMeteringEquipment };

/** Purpose - Parent container holding list of removed metering equipment. */
interface _RemovedMeteringEquipments extends BaseType {
  RemovedMeteringEquipment: RemovedMeteringEquipment[];
}
export interface RemovedMeteringEquipments extends _RemovedMeteringEquipments {
  constructor: { new (): RemovedMeteringEquipments };
}
export var RemovedMeteringEquipments: { new (): RemovedMeteringEquipments };

/** Purpose - Base type for all table row definitions
 * Detail - Any table to be replicated must support these fields. Sequence numbers provide a way to request table rows in chunks, with the last sequence number seen in one ReplicationNotification providing an input to the ReplicationRequest of the next. */
interface _ReplicationBaseRow extends BaseType {
  CreationDate: Date;
  MaintenanceDate: Date;
  RowStatus: ActiveInactive;
  SequenceNumber: number;
  UserID?: string;
}
export interface ReplicationBaseRow extends _ReplicationBaseRow {
  constructor: { new (): ReplicationBaseRow };
}
export var ReplicationBaseRow: { new (): ReplicationBaseRow };

/** Purpose - Container for row data from a table */
interface _ReplicationBlock extends BaseType {
  tableName: string;
  Row:
    | ReplicationBaseRow[]
    | ElectricityNMIMasterRow[]
    | ElectricityNMIRoleRow[]
    | ElectricityNMIDataStreamRow[]
    | ElectricityNMIMeterRow[]
    | ElectricityNMIMeterRegisterRow[];
}
export interface ReplicationBlock extends _ReplicationBlock {
  constructor: { new (): ReplicationBlock };
}
export var ReplicationBlock: { new (): ReplicationBlock };

/** Purpose - Base type for tables employing an effective date range */
interface _ReplicationDateRangeRow extends _ReplicationBaseRow {
  FromDate: Date;
  ToDate: Date;
}
export interface ReplicationDateRangeRow extends _ReplicationDateRangeRow {
  constructor: { new (): ReplicationDateRangeRow };
}
export var ReplicationDateRangeRow: { new (): ReplicationDateRangeRow };

/** Application - Table Replication
 * TransactionExchange - Replication Notification, Replication Request
 * TransactionGroup - Multiple
 * Priority - Low
 * Purpose - Provide portions of one or more tables
 * Detail - Where the notification is the result of a replication request, only data for one table will be present. Where the notification is carrying unsolicited updates, data from multiple tables may be present. If replication parameters are provided, at least one Event element must be present in the response to indicate the success or otherwise of the request. */
interface _ReplicationNotification extends BaseType {
  version?: r10;
  Event?: Event[];
  ReplicationBlock?: ReplicationBlock[];
  ReplicationParameters?: ReplicationParameters;
}
export interface ReplicationNotification extends _ReplicationNotification {
  constructor: { new (): ReplicationNotification };
}
export var ReplicationNotification: { new (): ReplicationNotification };

/** Purpose - Define the parameters of a replication request
 * Detail - The parameters provided in a replication request are also provided on the response. While unnecessary for batch initiated requests (due to the presence of an initiatingTransactionID on the reponse), it is useful where transactions have been submitted on-line. */
interface _ReplicationParameters extends BaseType {
  CreationFromDate: Date;
  CreationToDate: Date;
  LastSequenceNumber: number;
  MaximumRows?: number;
  TableName: string;
}
export interface ReplicationParameters extends _ReplicationParameters {
  constructor: { new (): ReplicationParameters };
}
export var ReplicationParameters: { new (): ReplicationParameters };

/** Purpose - container for a report having the same structure as used by the table replication transactions
 * Detail - Where a report returns a related set of table contents, a standard container may be used, since the structure of the replication block will impose structure on the report in terms of format. */
interface _ReplicationReportFormat extends _BaseReportFormat {
  ReplicationBlock: ReplicationBlock[];
}
export interface ReplicationReportFormat extends _ReplicationReportFormat {
  constructor: { new (): ReplicationReportFormat };
}
export var ReplicationReportFormat: { new (): ReplicationReportFormat };

/** Application - Table Replication
 * TransactionExchange - Replication Request
 * TransactionGroup - Multiple
 * Priority - Low
 * Purpose - Request a portion of a table
 * Detail - Large amounts of data may need to be transferred via table replication. In order that these requests do not adversely affect system performance, a limit is placed on how many rows may be retrieved by any one request. To "step through" the data required, an initial transaction with a LastSequenceNumber of zero should be used. The logic of the transaction handler should always sort by sequence number and request rows greater than that provided by the LastSequenceNumber element. Subsequent requests should use the largest sequence number seen in the previous response transaction. For efficiency, the data in ReplicationNotifications should be sorted in assending sequence number allowing the sequence number on the last row of the previous response transaction to be used.
 *
 * The date range provided on the request allows finer grained control over the data provided, and supports a incremental download from a previously established baseline. To obtain all data, use a CreationFromDate  of 2001-01-01T00:00:00+00:00 and a CreationToDate of 9999-12-31T23:59:59+00:00. */
interface _ReplicationRequest extends BaseType {
  version?: r10;
  ReplicationParameters: ReplicationParameters;
}
export interface ReplicationRequest extends _ReplicationRequest {
  constructor: { new (): ReplicationRequest };
}
export var ReplicationRequest: { new (): ReplicationRequest };

/** Purpose - Uniquely identifies each row within a table
 * MSATS Data Model Column - ID_*
 * Detail - Sequence numbers on each row allow delivery of large amounts of data via a series of related requests. */
export type ReplicationSequenceNumber = number;
type _ReplicationSequenceNumber = Primitive._number;

/** Purpose - indicate the table being replicated
 * Detail - On previous versions of the schema, valid table names were explicitly listed in an enumeration. In order to make table replication more generic, this validation is now assumed to be performed by the application. */
export type ReplicationTableName = string;
type _ReplicationTableName = Primitive._string;

/** Purpose - Identifies the required report */
export type ReportName = string;
type _ReportName = Primitive._string;

/** Purpose - container for  list of generic parameters */
interface _ReportParametersType extends BaseType {
  Parameter: ReportParameterType[];
}
export interface ReportParametersType extends _ReportParametersType {
  constructor: { new (): ReportParametersType };
}
export var ReportParametersType: { new (): ReportParametersType };

/** Purpose - Identify a genericParameterType */
interface _ReportParameterType extends BaseType {
  Name: string;
}
export interface ReportParameterType extends _ReportParameterType {
  constructor: { new (): ReportParameterType };
}
export var ReportParameterType: { new (): ReportParameterType };

/** Application - Reports
 * TransactionExchange - Report Request
 * TransactionGroup - Multiple
 * Priority - Low
 * Purpose - Request a report
 * Detail - This is a generic transaction that relies on the details of the exact report required being determined by the xsi:type attribute provided by the sender on the ReportParameters element. */
interface _ReportRequest extends BaseType {
  version?: r10;
  ReportParameters: BaseReportParameters | CATSMasterReportParameters;
}
export interface ReportRequest extends _ReportRequest {
  constructor: { new (): ReportRequest };
}
export var ReportRequest: { new (): ReportRequest };

/** Application - Reports
 * TransactionExchange - Report Request
 * TransactionGroup - CATS for CATSReportRequest, MDMT for MDMReportRequest
 * Priority - Low
 * Purpose - Return the results of a report
 * Detail - This is a generic transaction that relies on the details of the exact report format returned being determined by the xsi:type attribute provided by the sender on the ReportParameters and ReportResults elements. At least one Event element must be present in the response to indicate the success or otherwise of the report. */
interface _ReportResponse extends BaseType {
  version?: r39;
  Event: Event[];
  ReportParameters: BaseReportParameters | CATSMasterReportParameters;
  ReportResults?: BaseReportFormat | ReplicationReportFormat;
  ResultBlock?: MRBlockParameterType;
}
export interface ReportResponse extends _ReportResponse {
  constructor: { new (): ReportResponse };
}
export var ReportResponse: { new (): ReportResponse };

/** The type reports.
 * PRE- Preliminary
 * REV-Revision
 * FIN-Final */
export type ReportType = "PRE" | "REV" | "FIN";
interface _ReportType extends Primitive._string {
  content: ReportType;
}

/** Purpose - Associate a party with a role they are performing or intend to perform. */
interface _RequestParameter extends BaseType {
  Name: string;
  Value: string;
}
export interface RequestParameter extends _RequestParameter {
  constructor: { new (): RequestParameter };
}
export var RequestParameter: { new (): RequestParameter };

/** Purpose - Define the parameters for each request. */
interface _RequestParameters extends BaseType {
  Parameter: RequestParameter[];
}
export interface RequestParameters extends _RequestParameters {
  constructor: { new (): RequestParameters };
}
export var RequestParameters: { new (): RequestParameters };

/** Purpose - Define the fixed Reasons used to request customer details */
export type RequestReason =
  | "Returned Mail"
  | "Missing Customer Details"
  | "Confirm Life Support"
  | "Other"
  | "Transfer Complete, no CDN Received"
  | "New Connection, no CDN Received"
  | "No response to rejected CDN"
  | "Data Quality Issue"
  | "Rec - confirm no SensitiveLoad";
interface _RequestReason extends Primitive._string {
  content: RequestReason;
}

/** Purpose - defines the resolution details */
interface _ResolutionItem extends BaseType {
  AgreedAmount: ResolutionItemAgreedAmountType;
  Comments?: SpecialComments;
  Date: Date;
  NumberOfTransactions?: number;
}
export interface ResolutionItem extends _ResolutionItem {
  constructor: { new (): ResolutionItem };
}
export var ResolutionItem: { new (): ResolutionItem };

interface _ResolutionItemAgreedAmountType extends BaseType {
  Gross: number;
  Net?: number;
}
interface ResolutionItemAgreedAmountType
  extends _ResolutionItemAgreedAmountType {
  constructor: { new (): ResolutionItemAgreedAmountType };
}

type ResolutionItemNumberOfTransactionsType = number;
type _ResolutionItemNumberOfTransactionsType = Primitive._number;

/** This element is used to define the Response payload format. eg CSV, XML, MDFF, BASE64 */
export type ResponseFormat = string;
type _ResponseFormat = Primitive._string;

interface _ResponsePayload extends BaseType {
  PayloadContent: any;
  RecordCount?: number;
}
export interface ResponsePayload extends _ResponsePayload {
  constructor: { new (): ResponsePayload };
}
export var ResponsePayload: { new (): ResponsePayload };

export type ResponseType = "Initial" | "Closure" | "Appointment";
interface _ResponseType extends Primitive._string {
  content: ResponseType;
}

/** Purpose - Definition for IAITRevisedImbalanceRpt
 * Report Details - Notification of Revised Participant Imbalance Amount. */
interface _RevisedImbalanceRpt extends _BaseReportFormat {
  RevisedImbalanceData: RevisedImbalanceRptRevisedImbalanceDataType[];
}
export interface RevisedImbalanceRpt extends _RevisedImbalanceRpt {
  constructor: { new (): RevisedImbalanceRpt };
}
export var RevisedImbalanceRpt: { new (): RevisedImbalanceRpt };

interface _RevisedImbalanceRptRevisedImbalanceDataType extends BaseType {
  gasDate: Date;
  networkID: string;
  CumulativeImbalance: number;
  TradeRevision?: RevisedImbalanceRptRevisedImbalanceDataTypeTradeRevisionType;
}
interface RevisedImbalanceRptRevisedImbalanceDataType
  extends _RevisedImbalanceRptRevisedImbalanceDataType {
  constructor: { new (): RevisedImbalanceRptRevisedImbalanceDataType };
}

interface _RevisedImbalanceRptRevisedImbalanceDataTypeTradeRevisionType
  extends BaseType {
  CounterpartyParticipantID: PartyIdentifier[];
  CumulativeImbalance: number[];
  TradedImbalanceAmount: number[];
  TradeType: TradeType[];
}
interface RevisedImbalanceRptRevisedImbalanceDataTypeTradeRevisionType
  extends _RevisedImbalanceRptRevisedImbalanceDataTypeTradeRevisionType {
  constructor: {
    new (): RevisedImbalanceRptRevisedImbalanceDataTypeTradeRevisionType;
  };
}

/** Purpose - Associate a party with a role they are performing or intend to perform. */
interface _RoleAssignment extends BaseType {
  FromDate?: Date;
  Party?: PartyIdentifier;
  Role: string;
  ToDate?: Date;
}
export interface RoleAssignment extends _RoleAssignment {
  constructor: { new (): RoleAssignment };
}
export var RoleAssignment: { new (): RoleAssignment };

/** Purpose - container type for one or more role assignments */
interface _RoleAssignments extends BaseType {
  RoleAssignment: RoleAssignment[];
}
export interface RoleAssignments extends _RoleAssignments {
  constructor: { new (): RoleAssignments };
}
export var RoleAssignments: { new (): RoleAssignments };

/** Purpose - Identify the role category.
 * MSATS Data Model Column - Role_Category */
export type RoleCategory = string;
type _RoleCategory = Primitive._string;

/** Purpose - Describe the roles a party might perform.
 * MSATS Data Model Column - RoleDesc
 * Detail - The description is intended to assist in identification of the correct role. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type RoleDescription = string;
type _RoleDescription = Primitive._string;

/** Purpose - Identify the roles a party might perform.
 * MSATS Data Model Column - RoleID
 * Detail - Roles often form the basis for jurisdictional rules. */
export type RoleIdentifier = string;
type _RoleIdentifier = Primitive._string;

/** Purpose - Row of the RoleIdentifiers table
 * MSATS Data Model Table - CATS_Roles
 * Replication Table Name - RoleIdentifiers */
interface _RoleIdentifierRow extends _ReplicationDateRangeRow {
  Description: string;
  Identifier: string;
}
export interface RoleIdentifierRow extends _RoleIdentifierRow {
  constructor: { new (): RoleIdentifierRow };
}
export var RoleIdentifierRow: { new (): RoleIdentifierRow };

interface _SafetyCertificateType extends BaseType {
  ID?: string;
  MethodSent: MethodSent;
}
export interface SafetyCertificateType extends _SafetyCertificateType {
  constructor: { new (): SafetyCertificateType };
}
export var SafetyCertificateType: { new (): SafetyCertificateType };

/** Purpose - Corresponds to a reference that contributes to defining the legal boundaries of a plot of land in NSW and ACT. */
export type SectionNumber = string;
type _SectionNumber = Primitive._string;

/** To provide information about Sensitive Load  customers */
interface _SensitiveLoad extends BaseType {
  indicator: boolean;
  SensitiveLoadComments?: SensitiveLoadSensitiveLoadCommentsType;
}
export interface SensitiveLoad extends _SensitiveLoad {
  constructor: { new (): SensitiveLoad };
}
export var SensitiveLoad: { new (): SensitiveLoad };

interface _SensitiveLoadSensitiveLoadCommentsType extends BaseType {
  Line: string[];
}
interface SensitiveLoadSensitiveLoadCommentsType
  extends _SensitiveLoadSensitiveLoadCommentsType {
  constructor: { new (): SensitiveLoadSensitiveLoadCommentsType };
}

/** Purpose - Define the fixed Special Condition Code used in customer details notification */
export type SensitiveLoadType = "Life Support" | "Sensitive Load" | "None";
interface _SensitiveLoadType extends Primitive._string {
  content: SensitiveLoadType;
}

/** Schema - Gas */
interface _ServiceOrderGasCompletionData extends BaseType {
  DateServiceOrderCompleted: Date;
  MeterData?: BaseServiceOrderGasMeterData;
  TimeServiceOrderCompleted?: string;
}
export interface ServiceOrderGasCompletionData
  extends _ServiceOrderGasCompletionData {
  constructor: { new (): ServiceOrderGasCompletionData };
}
export var ServiceOrderGasCompletionData: {
  new (): ServiceOrderGasCompletionData;
};

/** Schema - Gas */
interface _ServiceOrderGasJobCompletionCodes extends BaseType {
  JobCompletionCode1: GasJobCompletionCode1;
  JobCompletionCode2: GasJobCompletionCode2;
  JobCompletionCode3?: GasJobCompletionCode3;
}
export interface ServiceOrderGasJobCompletionCodes
  extends _ServiceOrderGasJobCompletionCodes {
  constructor: { new (): ServiceOrderGasJobCompletionCodes };
}
export var ServiceOrderGasJobCompletionCodes: {
  new (): ServiceOrderGasJobCompletionCodes;
};

/** Schema - Gas */
interface _ServiceOrderGasMeterData extends _BaseServiceOrderGasMeterData {
  Current: GasMeterStandingData;
  New?: GasMeterStandingData;
  Removed?: GasMeterStandingData;
}
export interface ServiceOrderGasMeterData extends _ServiceOrderGasMeterData {
  constructor: { new (): ServiceOrderGasMeterData };
}
export var ServiceOrderGasMeterData: { new (): ServiceOrderGasMeterData };

/** Schema - Gas */
interface _ServiceOrderGasNoAccessData extends BaseType {
  DateOfAttemptedAccess: Date;
  SpecialReadNoAccess: GasSpecialReadNoAccess;
}
export interface ServiceOrderGasNoAccessData
  extends _ServiceOrderGasNoAccessData {
  constructor: { new (): ServiceOrderGasNoAccessData };
}
export var ServiceOrderGasNoAccessData: { new (): ServiceOrderGasNoAccessData };

/** Schema - ServiceOrder */
interface _ServiceOrderHeader extends BaseType {
  Address: Address;
  NMI: NMI;
  ServiceOrderNumber?: string;
  ServiceOrderType?: ServiceOrderTypeBase;
  ServiceProviderReference?: string;
}
export interface ServiceOrderHeader extends _ServiceOrderHeader {
  constructor: { new (): ServiceOrderHeader };
}
export var ServiceOrderHeader: { new (): ServiceOrderHeader };

/** Schema - Gas */
interface _ServiceOrderMultiMeterData extends _BaseServiceOrderGasMeterData {
  Current: GasMultiMeterStandingDataType[];
  New?: GasMultiMeterStandingDataType[];
  Removed?: GasMultiMeterStandingDataType[];
}
export interface ServiceOrderMultiMeterData
  extends _ServiceOrderMultiMeterData {
  constructor: { new (): ServiceOrderMultiMeterData };
}
export var ServiceOrderMultiMeterData: { new (): ServiceOrderMultiMeterData };

/** Schema - ServiceOrder */
interface _ServiceOrderNotificationData extends BaseType {
  NMIStandingData?: NMIStandingData;
  SpecialNotes?: SpecialComments;
}
export interface ServiceOrderNotificationData
  extends _ServiceOrderNotificationData {
  constructor: { new (): ServiceOrderNotificationData };
}
export var ServiceOrderNotificationData: {
  new (): ServiceOrderNotificationData;
};

/** Application - Service Order
 * TransactionExchange -
 * TransactionGroup - SORD
 * Priority - Medium
 * Purpose - Submit Service Order Request to the Service Provider */
interface _ServiceOrderRequest extends BaseType {
  actionType: ActionType;
  version?: r41;
  AppointmentDetail?: AppointmentDetail;
  CoOrdinatingContactDetail?: CustomerDetail;
  ContactDetail?: CustomerDetail;
  CustomerDetail?: CustomerDetail;
  NotifiedParties?: NotifiedParties;
  RequestData?: ServiceOrderRequestData;
  ServiceOrder: ServiceOrderHeader;
  ServicePoint?: ServicePoint;
}
export interface ServiceOrderRequest extends _ServiceOrderRequest {
  constructor: { new (): ServiceOrderRequest };
}
export var ServiceOrderRequest: { new (): ServiceOrderRequest };

/** Schema - ServiceOrder */
interface _ServiceOrderRequestData extends BaseType {
  NMIStandingData?: NMIStandingData;
  SpecialInstructions?: SpecialComments;
}
export interface ServiceOrderRequestData extends _ServiceOrderRequestData {
  constructor: { new (): ServiceOrderRequestData };
}
export var ServiceOrderRequestData: { new (): ServiceOrderRequestData };

/** Application - Service Order
 * TransactionExchange -
 * TransactionGroup - SORD
 * Priority - Medium
 * Purpose - Submit Service Order completion details to the Retailer */
interface _ServiceOrderResponse extends BaseType {
  responseType: ResponseType;
  version?: r36;
  AppointmentDetail?: AppointmentDetail;
  ContactDetail?: CustomerDetail;
  Event?: Event[];
  NotificationData?: ServiceOrderNotificationData;
  ServiceOrder: ServiceOrderHeader;
}
export interface ServiceOrderResponse extends _ServiceOrderResponse {
  constructor: { new (): ServiceOrderResponse };
}
export var ServiceOrderResponse: { new (): ServiceOrderResponse };

/** Purpose - Defines a list of valid service order status codes */
export type ServiceOrderStatus =
  | "Completed"
  | "Partially Completed"
  | "Not Completed";
interface _ServiceOrderStatus extends Primitive._string {
  content: ServiceOrderStatus;
}

/** Purpose - Defines a list of valid Service Order types supported by the particpants */
export type ServiceOrderSubType =
  | "After Disconnection For Non-Payment"
  | "Remove Fuse"
  | "Disconnect at Pillar-Box Pit Or Pole-Top"
  | "Install Controlled Load"
  | "Move Meter"
  | "Install Meter"
  | "Remove Meter"
  | "Exchange Meter"
  | "Check Read"
  | "Final Read"
  | "Allocate NMI"
  | "Establish Permanent Supply"
  | "Establish Temporary Supply"
  | "Establish Temporary In Permanent"
  | "Local Meter Disconnection"
  | "Meter Investigation-Inspect"
  | "Meter Investigation-Test"
  | "Meter Reconfiguration"
  | "Recipient Discretion"
  | "Remote"
  | "Supply Abolishment"
  | "Supply Alteration"
  | "Tariff Change"
  | "Temporary Isolation"
  | "Temporary Isolation-Group Supply"
  | "Change Timeswitch Settings"
  | "Reseal Device"
  | "Retrospective Move-in"
  | "Move-in"
  | "New Reading Required"
  | "Physical Visit";
interface _ServiceOrderSubType extends Primitive._string {
  content: ServiceOrderSubType;
}

/** Purpose - Defines a list of valid Service Order types supported by the particpants */
export type ServiceOrderType =
  | "Re-energisation"
  | "De-energisation"
  | "Special Read"
  | "Miscellaneous"
  | "Metering Service Works"
  | "Supply Service Works";
interface _ServiceOrderType extends Primitive._string {
  content: ServiceOrderType;
}

/** Base type for type substitution in instance documents using xsi:type construct.  Types currently based on this type are:
 * ServiceOrderTypeGas-Gas schema
 * ServiceOrderTypeElectricity- Electricity schema */
interface _ServiceOrderTypeBase extends BaseType {}
export interface ServiceOrderTypeBase extends _ServiceOrderTypeBase {
  constructor: { new (): ServiceOrderTypeBase };
}
export var ServiceOrderTypeBase: { new (): ServiceOrderTypeBase };

/** Purpose - Define service point address and other properties */
interface _ServicePoint extends BaseType {
  AccessDetails?: string;
  Address?: Address;
  DogCode?: GasMeterDogCode;
  Hazard?: SiteHazard[];
  MelwayGridReference?: string;
  MeterPosition?: GasMeterPosition;
}
export interface ServicePoint extends _ServicePoint {
  constructor: { new (): ServicePoint };
}
export var ServicePoint: { new (): ServicePoint };

type ServicePointMelwayGridReferenceType = string;
type _ServicePointMelwayGridReferenceType = Primitive._string;

/** This element is used to define the Remote service request ID. */
export type ServiceRequestID = string;
type _ServiceRequestID = Primitive._string;

/** Service Order Service Time Type */
export type ServiceTimeType =
  | "Any Time"
  | "Business Hours"
  | "Non-Business Hours";
interface _ServiceTimeType extends Primitive._string {
  content: ServiceTimeType;
}

/** Application - Meter Data Management
 * TransactionExchange - Settlement Data Delivery
 * TransactionGroup - MDMT
 * Priority - Low
 * Purpose - Provide settlement data
 * Detail - Only one type of settlement data can be delivered within a given transaction. */
interface _SettlementDataNotification extends BaseType {
  version?: r4;
  /** Purpose - Deliver aggregated settlement data
   * Detail - The following column headings will be employed in the default order listed
   * for each energy market.
   *
   * NEM
   * TNI - as per MDM
   * FRMP - as per MDM
   * LR - as per MDM
   * MDP - as per MDM
   * SettlementDate - YYYYMMDD
   * Period01- in kiloWattHours, no leading/trailing zeros
   * Period02 - in kiloWattHours, no leading/trailing zeros
   * ...
   * Period48 - in kiloWattHours, no leading/trailing zeros */
  CSVAggregatedSettlementData: string;
  /** Purpose - Deliver non-aggregated settlement data
   * Details - The following column headings will be employed in the default order listed
   * for each energy market.
   *
   * NEM
   * TNI - as per MDM
   * FRMP - as per MDM
   * LR - as per MDM
   * MDP - as per MDM
   * NMI - 10 characters
   * Suffix - 2 characters
   * SettlementDate  - YYYYMMDD
   * Period01- in kiloWattHours, no leading/trailing zeros
   * Period02 - in kiloWattHours, no leading/trailing zeros
   * ...
   * Period48 - in kiloWattHours, no leading/trailing zeros */
  CSVNonAggregatedSettlementData: string;
}
export interface SettlementDataNotification
  extends _SettlementDataNotification {
  constructor: { new (): SettlementDataNotification };
}
export var SettlementDataNotification: { new (): SettlementDataNotification };

interface _SharedFuseNotification extends BaseType {
  version?: r43;
  IdentifiedDate: Date;
  NMI: NMI;
  SharedIsolationPointFlag: string;
}
export interface SharedFuseNotification extends _SharedFuseNotification {
  constructor: { new (): SharedFuseNotification };
}
export var SharedFuseNotification: { new (): SharedFuseNotification };

/** Purpose - Flag to indicate the Shared Fuse Arrangement for the metering installation - SharedIsolationPointFlag */
export type SharedIsolationPointFlag = string;
type _SharedIsolationPointFlag = Primitive._string;

interface _ShipperChangeRequestType extends BaseType {
  type: ShipperChangeType;
  EffectiveDate?: Date;
  Pipeline?: string;
  Reason?: string;
  RoleAssignments?: RoleAssignments;
  Subnet?: string;
}
export interface ShipperChangeRequestType extends _ShipperChangeRequestType {
  constructor: { new (): ShipperChangeRequestType };
}
export var ShipperChangeRequestType: { new (): ShipperChangeRequestType };

export type ShipperChangeType = "Add" | "Remove";
interface _ShipperChangeType extends Primitive._string {
  content: ShipperChangeType;
}

export type ShortUniqueIdentifier = string;
type _ShortUniqueIdentifier = Primitive._string;

interface _SiteAccessDetails extends _NMIStandingData {
  version?: r19;
  AccessDetail: string;
  Hazard: SiteHazard[];
  LastModifiedDateTime: Date;
}
export interface SiteAccessDetails extends _SiteAccessDetails {
  constructor: { new (): SiteAccessDetails };
}
export var SiteAccessDetails: { new (): SiteAccessDetails };

/** NEM - B2B Electricity: Transaction Group:  SITE; Purpose: Request site access - National Electricity B2B Process - Tranche 1 Build Pack; VicGas:  Not Used. */
interface _SiteAccessRequest extends BaseType {
  version?: r36;
  NMI: NMI;
  Reason: SiteRequestReason;
  SpecialNotes?: SpecialComments;
}
export interface SiteAccessRequest extends _SiteAccessRequest {
  constructor: { new (): SiteAccessRequest };
}
export var SiteAccessRequest: { new (): SiteAccessRequest };

interface _SiteAddressDetails extends BaseType {
  Address: Address;
  CustomerType?: CustomerType;
  LastModifiedDateTime: Date;
  NMI: NMI;
}
export interface SiteAddressDetails extends _SiteAddressDetails {
  constructor: { new (): SiteAddressDetails };
}
export var SiteAddressDetails: { new (): SiteAddressDetails };

/** Site Hazard */
interface _SiteHazard extends BaseType {
  Code?: string;
  Description: string;
}
export interface SiteHazard extends _SiteHazard {
  constructor: { new (): SiteHazard };
}
export var SiteHazard: { new (): SiteHazard };

/** Purpose - Define the fixed Reasons used to request site access details
 * Version 1.0 additions
 * - New Retailer for site
 * - Records old and need to be updated
 * - No Access details on file for NMI
 * - No Hazard Details on file for NMI
 * - Site Visit Required
 * - Other */
export type SiteRequestReason =
  | "New Retailer for site"
  | "Records old and need to be updated"
  | "No Access details on file for NMI"
  | "No Hazard Details on file for NMI"
  | "Site Visit Required"
  | "Other";
interface _SiteRequestReason extends Primitive._string {
  content: SiteRequestReason;
}

/** Purpose - Defines a list of valid response code for different types of service orders */
export type SORDResponseCode =
  | "Customer On-Site"
  | "Customer Prevented"
  | "De-energisation Not Completed Due To A Re-energisation"
  | "Documentation Not Provided"
  | "Metering Problem"
  | "Meter Reading Only Undertaken Due To Prior Re-energisation"
  | "New Customer On-Site"
  | "No Supply"
  | "Other"
  | "Reading Problem"
  | "Request Submitted By Another Initiator"
  | "Initiator Cancellation"
  | "Sensitive Load"
  | "Recipient Cancellation"
  | "Unable To Access"
  | "Unknown Load"
  | "Unsafe"
  | "Tariff Change Not Approved"
  | "Inadequate infrastructure"
  | "No Comms"
  | "Life Support"
  | "Meter Not Retrieved"
  | "Metering not compatible with proposed Tariff Change"
  | "Shared Supply Point"
  | "Site Already Energised"
  | "Unknown Connection Status";
interface _SORDResponseCode extends Primitive._string {
  content: SORDResponseCode;
}

/** Purpose - Defines the Comments in terms of the CommentLine */
interface _SpecialComments extends BaseType {
  CommentLine: string[];
}
export interface SpecialComments extends _SpecialComments {
  constructor: { new (): SpecialComments };
}
export var SpecialComments: { new (): SpecialComments };

/** Purpose - Define the fixed Special Condition Code used in customer details notification */
export type SpecialConditionCode = "LSUP" | "NOTO";
interface _SpecialConditionCode extends Primitive._string {
  content: SpecialConditionCode;
}

/** Purpose - Defines a list of valid Special Read reason codes */
export type SpecialReadReasonCode =
  | "Account Investigation"
  | "Final Read"
  | "Final Read for Disconnection on Non-Payment"
  | "Final and Opening Read"
  | "Opening Read"
  | "Change of Retailer"
  | "Change of Customer"
  | "Check Read"
  | "Other"
  | "Sticker Removed"
  | "Final Read Stickered"
  | "Read Following Disconnection for Non-Payment";
interface _SpecialReadReasonCode extends Primitive._string {
  content: SpecialReadReasonCode;
}

/** Schema - Gas */
export type StartWorkNoticeNumberType = string;
type _StartWorkNoticeNumberType = Primitive._string;

export type StopFileCause = string;
type _StopFileCause = Primitive._string;

/** Purpose - Identify a genericParameterType */
interface _StringParameter extends _ReportParameterType {
  Value: string;
}
export interface StringParameter extends _StringParameter {
  constructor: { new (): StringParameter };
}
export var StringParameter: { new (): StringParameter };

export type SubnetIdentifier = string;
type _SubnetIdentifier = Primitive._string;

/** The Subnet and Pipeline identifiers are defined as attributes to allow XML sorting/filtering of the quantity elements */
interface _SubnetQuantityType extends BaseType {
  gatePoint: string;
  historicalDay: Date;
  id: string;
  profileType: UserProfieType;
  Allocation: AllocationQuantityType;
  Amount: HourlyQuantityType[];
  ClearingPrice: number;
  HeatingDegree: HeatingDegreeType[];
  Normalisation: NormalisationType;
  PipelineRatio: number;
  Profile?: HourlyQuantityType[];
  Swing: SubnetQuantityTypeSwingType[];
  Value: NamedQuantityType[];
}
export interface SubnetQuantityType extends _SubnetQuantityType {
  constructor: { new (): SubnetQuantityType };
}
export var SubnetQuantityType: { new (): SubnetQuantityType };

interface _SubnetQuantityTypeSwingType extends BaseType {
  bidPriority: number;
  bidTotal: number;
  Allocation?: AllocationQuantityType;
  Bid?: SubnetQuantityTypeSwingTypeBidType[];
  Provider?: PartyIdentifier;
  Receiver?: PartyIdentifier;
  Value: SubnetQuantityTypeSwingTypeValueType[];
}
interface SubnetQuantityTypeSwingType extends _SubnetQuantityTypeSwingType {
  constructor: { new (): SubnetQuantityTypeSwingType };
}

interface _SubnetQuantityTypeSwingTypeBidType extends _Currency {
  allocationType: BidAllocationType;
  rejectionReason: number;
}
interface SubnetQuantityTypeSwingTypeBidType
  extends _SubnetQuantityTypeSwingTypeBidType {
  constructor: { new (): SubnetQuantityTypeSwingTypeBidType };
}

interface _SubnetQuantityTypeSwingTypeValueType extends _NamedQuantityType {
  swing: SwingGasType;
}
interface SubnetQuantityTypeSwingTypeValueType
  extends _SubnetQuantityTypeSwingTypeValueType {
  constructor: { new (): SubnetQuantityTypeSwingTypeValueType };
}

/** Purpose - Define the fixed Supply Off list
 * Version 1.0 additions
 * - Remove Fuse
 * - Remote
 * - Local Meter Disconnection
 * - Pillar-Box Pit Or Pole-Top */
export type SupplyOff =
  | "Remove Fuse"
  | "Remote"
  | "Local Meter Disconnection"
  | "Pillar-Box Pit Or Pole-Top";
interface _SupplyOff extends Primitive._string {
  content: SupplyOff;
}

/** Purpose - Defines a list of valid supply ohase */
export type SupplyPhase =
  | "1-phase"
  | "2-phase"
  | "3-phase"
  | "Other Multi-phase"
  | "Unknown";
interface _SupplyPhase extends Primitive._string {
  content: SupplyPhase;
}

/** Schema - Gas */
export type SupplyPointCode = "Basic" | "Interval" | "Transmission";
interface _SupplyPointCode extends Primitive._string {
  content: SupplyPointCode;
}

/** A unique identifier for a Supply Point */
export type SupplyPointID = string;
type _SupplyPointID = Primitive._string;

interface _SwingGasQuantityType extends _EnergyQuantity {
  type: SwingGasType;
}
export interface SwingGasQuantityType extends _SwingGasQuantityType {
  constructor: { new (): SwingGasQuantityType };
}
export var SwingGasQuantityType: { new (): SwingGasQuantityType };

export type SwingGasType = "Park" | "Loan";
interface _SwingGasType extends Primitive._string {
  content: SwingGasType;
}

interface _SwingServiceNotification extends BaseType {
  version?: r31;
  BidAllocation: QuantityNotification;
  BidNotification: QuantityNotification;
  BidStack: QuantityNotification;
  ClearingPrice: QuantityNotification;
  ClearingPriceNonAdjusted: QuantityNotification;
  OffMarketProcurement: QuantityNotification;
  OffMarketProcurementStatus: QuantityNotification;
  SwingService: QuantityNotification;
  SwingServiceApportionment: QuantityNotification;
  SwingServiceRepayment: QuantityNotification;
  UserSwingService: QuantityNotification;
}
export interface SwingServiceNotification extends _SwingServiceNotification {
  constructor: { new (): SwingServiceNotification };
}
export var SwingServiceNotification: { new (): SwingServiceNotification };

export type SwitchingServiceRequired = string;
type _SwitchingServiceRequired = Primitive._string;

/** Purpose - container for requested tables */
interface _Tables extends BaseType {
  Table: string[];
}
export interface Tables extends _Tables {
  constructor: { new (): Tables };
}
export var Tables: { new (): Tables };

/** Schema - Gas */
export type TemperatureSensitivityFactor = number;
type _TemperatureSensitivityFactor = Primitive._number;

/** Purpose - Identify a genericParameterType */
interface _TimeParameter extends _ReportParameterType {
  Description?: string;
  Value: string;
}
export interface TimeParameter extends _TimeParameter {
  constructor: { new (): TimeParameter };
}
export var TimeParameter: { new (): TimeParameter };

/** (ENUMS!!!) Time of use code */
export type TimeSplit = string;
type _TimeSplit = Primitive._string;

/** Total Gas Quantity of Gas Injected At Network Receipt Points */
interface _TotalGasInjectedNotification extends BaseType {
  version?: r34;
  TotalGasInjectedData: TotalGasInjectedNotificationTotalGasInjectedDataType[];
}
export interface TotalGasInjectedNotification
  extends _TotalGasInjectedNotification {
  constructor: { new (): TotalGasInjectedNotification };
}
export var TotalGasInjectedNotification: {
  new (): TotalGasInjectedNotification;
};

interface _TotalGasInjectedNotificationTotalGasInjectedDataType
  extends BaseType {
  gasDate: Date;
  networkID: string;
  networkReceiptPointID: string;
  TotalGasInjected: number;
}
interface TotalGasInjectedNotificationTotalGasInjectedDataType
  extends _TotalGasInjectedNotificationTotalGasInjectedDataType {
  constructor: { new (): TotalGasInjectedNotificationTotalGasInjectedDataType };
}

/** The type of an imbalance trade.Types
 * B - Buy
 * S - Sell */
export type TradeType = "B" | "S";
interface _TradeType extends Primitive._string {
  content: TradeType;
}

/** Purpose - Common container for all transactions
 * Detail - All transactions within aseXML are carried within this container. The transactionID and transactionDate are provided for all transactions. The initiatingTransactionID is only provided on response transactions and represents the transactionID of the initiating transaction. */
interface _Transaction extends BaseType {
  initiatingTransactionID?: string;
  transactionDate: Date;
  transactionID: string;
  AccountCreationNotification: AccountCreationNotification;
  AllocationNotification: AllocationNotification;
  AmendMeterRouteDetails: AmendMeterRouteDetails;
  CATSBulkDataRequest: CATSBulkDataRequest;
  CATSBulkDataResponse: CATSBulkDataResponse;
  CATSChangeAlert: CATSChangeAlert;
  CATSChangeRequest: CATSChangeRequest;
  CATSChangeResponse: CATSChangeResponse;
  CATSChangeWithdrawal: CATSChangeWithdrawal;
  CATSDataRequest: CATSDataRequest;
  CATSNotification: CATSNotification;
  CATSObjectionRequest: CATSObjectionRequest;
  CATSObjectionResponse: CATSObjectionResponse;
  CATSObjectionWithdrawal: CATSObjectionWithdrawal;
  CreditNotification: CreditNotification;
  CurrentRetailerConfirmationRequest: CurrentRetailerConfirmationRequest;
  CurrentRetailerConfirmationResponse: CurrentRetailerConfirmationResponse;
  CustomerDetailsNotification: CustomerDetailsNotification;
  CustomerDetailsRequest: CustomerDetailsRequest;
  DailyImbalanceNotification: DailyImbalanceNotification;
  DisputeNotification: DisputeNotification;
  DisputeResponse: DisputeResponse;
  FaultInformationRequest: FaultInformationRequest;
  FaultNotification: FaultNotification;
  FaultOutageAdvice: FaultOutageAdvice;
  FieldWorkNotification: FieldWorkNotification;
  GasMeterNotification: GasMeterNotification;
  HSMDataInventoryRequest: HSMDataInventoryRequest;
  HSMDataInventoryResponse: HSMDataInventoryResponse;
  HSMMonitorDataRequest: HSMMonitorDataRequest;
  HSMMonitorDataResponse: HSMMonitorDataResponse;
  HSMMonitorsRequest: HSMMonitorsRequest;
  HSMMonitorsResponse: HSMMonitorsResponse;
  HSMTriggersRequest: HSMTriggersRequest;
  HSMTriggersResponse: HSMTriggersResponse;
  HubFlowControlAlertNotification: HubFlowControlAlertNotification;
  HubFlowControlReport: HubFlowControlReport;
  HubQueueReport: HubQueueReport;
  ImbalanceTradeRequest: ImbalanceTradeRequest;
  LifeSupportNotification: LifeSupportNotification;
  LifeSupportRequest: LifeSupportRequest;
  LinepackAndUnaccountedForGasNotification: LinepackAndUnaccountedForGasNotification;
  MarketReport: MarketReport;
  MatchedAllocationsDataNotification: MatchedAllocationsDataNotification;
  MeterDataHistoryRequest: MeterDataHistoryRequest;
  MeterDataHistoryResponse: MeterDataHistoryResponse;
  MeterDataMissingNotification: MeterDataMissingNotification;
  MeterDataNotification: MeterDataNotification;
  MeterDataResponse: MeterDataResponse;
  MeterDataVerifyRequest: MeterDataVerifyRequest;
  MeterDataVerifyResponse: MeterDataVerifyResponse;
  MeteredSupplyPointsCountUpdate: MeteredSupplyPointsCountUpdate;
  MeterFaultAndIssueNotification: MeterFaultAndIssueNotification;
  MeterReadingReferenceDataRequest: MeterReadingReferenceDataRequest;
  MeterReadingReferenceDataResponse: MeterReadingReferenceDataResponse;
  MeterReadInputNotification: MeterReadInputNotification;
  MMSIntermittentGenAvailabilityRequest: MMSIntermittentGenAvailabilityRequest;
  NetworkDUoSBillingNotification: NetworkDUoSBillingNotification;
  NetworkInvoiceNotification: NetworkInvoiceNotification;
  NMIDiscoveryRequest: NMIDiscoveryRequest;
  NMIDiscoveryResponse: NMIDiscoveryResponse;
  NMIStandingDataRequest: NMIStandingDataRequest;
  NMIStandingDataResponse: NMIStandingDataResponse;
  NMIStandingDataUpdateNotification: NMIStandingDataUpdateNotification;
  NMIStandingDataUpdateResponse: MeterDataResponse;
  NOSBookingInfoRequest: NOSBookingInfoRequest;
  NOSBookingResponse: NOSBookingResponse;
  NOSBookingSubmission: NOSBookingSubmission;
  NOSEquipmentInfoRequest: NOSEquipmentInfoRequest;
  NOSEquipmentResponse: NOSEquipmentResponse;
  NOSEquipmentSubmission: NOSEquipmentSubmission;
  NOSInfoResponse: NOSInfoResponse;
  NoticeOfMeteringWorks: NoticeOfMeteringWorks;
  NotifiedParty: NotifiedParty;
  OneWayNotification: OneWayNotification;
  ParticipantCLPandUAGNotification: ParticipantCLPandUAGNotification;
  ParticipantImbalanceAmountRequest: ParticipantImbalanceAmountRequest;
  PayloadExceptionAlert: PayloadExceptionAlert;
  PlannedInterruptionNotification: PlannedInterruptionNotification;
  PTPDataExchange: PTPDataExchange;
  ReconciliationNotification: ReconciliationNotification;
  RemittanceNotification: RemittanceNotification;
  RemoteServiceRequest: RemoteServiceRequest;
  RemoteServiceResponse: RemoteServiceResponse;
  ReplicationNotification: ReplicationNotification;
  ReplicationRequest: ReplicationRequest;
  ReportRequest: ReportRequest;
  ReportResponse: ReportResponse;
  ServiceOrderRequest: ServiceOrderRequest;
  ServiceOrderResponse: ServiceOrderResponse;
  SettlementDataNotification: SettlementDataNotification;
  SharedFuseNotification: SharedFuseNotification;
  SiteAccessRequest: SiteAccessRequest;
  SpecialReadRequest: ServiceOrderRequest;
  SpecialReadResponse: ServiceOrderResponse;
  SwingServiceNotification: SwingServiceNotification;
  TotalGasInjectedNotification: TotalGasInjectedNotification;
  WholesaleInformationRequest: WholesaleInformationRequest;
  WholesaleInformationResponse: WholesaleInformationResponse;
  WholesaleRetrieveRequest: WholesaleRetrieveRequest;
  WholesaleRetrieveResponse: WholesaleRetrieveResponse;
  WholesaleSearchRequest: WholesaleSearchRequest;
  WholesaleSearchResponse: WholesaleSearchResponse;
  WholesaleSubmitRequest: WholesaleSubmitRequest;
  WholesaleSubmitResponse: WholesaleSubmitResponse;
}
export interface Transaction extends _Transaction {
  constructor: { new (): Transaction };
}
export var Transaction: { new (): Transaction };

/** Purpose - Acknowledge a received transaction
 * Detail - For every transaction, a transaction acknowledgment is generated.
 *
 * Any errors are reported via Event elements.
 *
 * If a transaction is rejected, no receipt identifier need be provided with the acknowledgement. */
interface _TransactionAcknowledgement extends BaseType {
  acceptedCount?: number;
  duplicate: YesNo;
  initiatingTransactionID: string;
  receiptDate: Date;
  receiptID?: string;
  status: TransactionStatus;
  Event?: Event[];
}
export interface TransactionAcknowledgement
  extends _TransactionAcknowledgement {
  constructor: { new (): TransactionAcknowledgement };
}
export var TransactionAcknowledgement: { new (): TransactionAcknowledgement };

export type TransactionCode =
  | "Add Meter or Register"
  | "Customer Transfer"
  | "Technical Data Change"
  | "Remove Meter"
  | "Special Read"
  | "On Request";
interface _TransactionCode extends Primitive._string {
  content: TransactionCode;
}

/** Purpose - Provide the transaction group to which all the contained transactions or transaction acknowledgments belong
 * Detail - The target application is at liberty to reject any transactions within the message that do not belong to the stated TransactionGroup. Where only message acknowledgements are carried, a transaction group of "MSGS" should be used.
 * The following groups are B2B process related:
 * FLTS - Faults and Outages
 * SORD - Service order, planned works
 * NETB - Network billing
 * MTRD - Meter data
 * CUST - Customer related
 * NOTF - Notifications (broadcast)
 * MKTW - Wholesale market operations
 * HSMD - High Speed Monitoring system
 * OWNP - Own Way Notification
 * EMMS - Electricity Market Management System
 * ERFT-NSW-ACT Wholesale Transaction Type
 * IAIT-NSW-ACT Wholesale Transaction Type
 * MRSR  -  remote services request/response
 * OWNX  -  NOMW, PIN and MFN
 * NPNX  -  Notified Party transaction
 * PTPE  -  Peer to Peer bilateral exchange
 * HMGT - Hub management */
export type TransactionGroup =
  | "CATS"
  | "MDMT"
  | "MSGS"
  | "NMID"
  | "FLTS"
  | "SORD"
  | "NETB"
  | "MTRD"
  | "CUST"
  | "NOTF"
  | "SITE"
  | "FLDW"
  | "OUTG"
  | "BAR"
  | "NMIF"
  | "MKTW"
  | "HSMD"
  | "OWNP"
  | "EMMS"
  | "ERFT"
  | "IAIT"
  | "MRSR"
  | "OWNX"
  | "NPNX"
  | "PTPE"
  | "HMGT";
interface _TransactionGroup extends Primitive._string {
  content: TransactionGroup;
}

/** Purpose - container for transaction groups */
interface _TransactionGroups extends BaseType {
  TransactionGroup: TransactionGroup[];
}
export interface TransactionGroups extends _TransactionGroups {
  constructor: { new (): TransactionGroups };
}
export var TransactionGroups: { new (): TransactionGroups };

/** Purpose - Defines the invoice charge item ID data type */
export type TransactionID = string;
type _TransactionID = Primitive._string;

/** Purpose - Uniquely identify every transaction generated by the transaction sender
 * Detail - Note that transaction identifiers do not have to be globally unique, only unique to a particular sender. However, the length has been chosen such that UUIDs can be used as transaction identifiers if considered appropriate, guaranteeing global uniqueness.
 *
 * A transaction acknowledgement identifies which transaction it is acknowledging by providing the transaction identifier as an attribute.
 *
 * In addition to carrying its own unique identifier, a transaction generated in response to the initial transaction of a transaction exchange also carries the transaction identifier of the initial transaction. This allows the sender to determine the context in which the response transaction should be interpreted. */
export type TransactionIdentifier = string;
type _TransactionIdentifier = _UniqueIdentifier;

/** Purpose - Provide the processing priority desired by the sender
 * Detail - The sender can indicate their preference in terms of timeliness of processing for the payload. It is left to the discretion of the receiver to determine whether and how to honour the requested priority. */
export type TransactionPriority = "High" | "Medium" | "Low";
interface _TransactionPriority extends _Priority {
  content: TransactionPriority;
}

/** Purpose - Container for multiple transactions within one aseXML message
 * Detail - An aseXML message may contain one or more transactions. All transactions within an aseXML message are grouped under this container. */
interface _Transactions extends BaseType {
  Transaction: Transaction[];
}
export interface Transactions extends _Transactions {
  constructor: { new (): Transactions };
}
export var Transactions: { new (): Transactions };

/** Purpose - Indicate the acceptance, partial acceptance or rejection of the transaction. */
export type TransactionStatus = "Accept" | "Partial" | "Reject";
interface _TransactionStatus extends Primitive._string {
  content: TransactionStatus;
}

/** MSATS Data Model Column - Current and Voltage TransformerTest */
export type TransformerTest = string;
type _TransformerTest = Primitive._string;

/** Purpose - Description of a transmission node identifer
 * MSATS Data Model Column - TNIDesc
 * Detail - The description is intended to assist in identification of the correct node identifier. The mapping between codes and descriptions will be provided to participants via the Table Replication transaction exchanges. */
export type TransmissionNodeDescription = string;
type _TransmissionNodeDescription = Primitive._string;

/** Purpose - Transmission node identfiers
 * MSATS Data Model Column - TNICode
 * Detail - Transmission nodes identify the points at which the intra-regional loss factors apply */
export type TransmissionNodeIdentifier = string;
type _TransmissionNodeIdentifier = Primitive._string;

/** Purpose - Row of the TransmissionNodeIdentifiers table
 * MSATS Data Model Table - CATS_TNI_Codes
 * Replication Table Name - TransmissionNodeIdentifiers */
interface _TransmissionNodeIdentifierRow extends _ReplicationDateRangeRow {
  Code: string;
  Description: string;
}
export interface TransmissionNodeIdentifierRow
  extends _TransmissionNodeIdentifierRow {
  constructor: { new (): TransmissionNodeIdentifierRow };
}
export var TransmissionNodeIdentifierRow: {
  new (): TransmissionNodeIdentifierRow;
};

/** Schema - Gas */
export type TransmissionZone = number;
type _TransmissionZone = Primitive._number;

/** Cause of the fault */
export type TroubleCause =
  | "Animal or bird damage"
  | "Associated to work on a nearby outage"
  | "Associated with planned outage"
  | "Damage caused by tree"
  | "False call"
  | "No access"
  | "No identified cause"
  | "OK on arrival"
  | "Pollution buildup"
  | "Problem in zone substation"
  | "Problem on customer's property"
  | "Problem with overhead cable or equipment"
  | "Problem with underground cable"
  | "Problem with underground equipment"
  | "Reconnection / restoration"
  | "Storm damage"
  | "Third party damage";
interface _TroubleCause extends Primitive._string {
  content: TroubleCause;
}

/** Schema - Gas */
export type TypeOfRead =
  | "Actual"
  | "Estimated"
  | "Substituted"
  | "Customer Own Read"
  | "Deemed";
interface _TypeOfRead extends Primitive._string {
  content: TypeOfRead;
}

/** Purpose - Parameter definition for UFE Factor Values By Local Area Report
 * Report Name - UFEFactorValuesByLocalArea
 * MSATS Reports - RM43 */
interface _UFEFactorValuesByLocalAreaReportParameters
  extends _BaseReportParameters {
  LocalArea?: string;
  SettlementCase: number;
}
export interface UFEFactorValuesByLocalAreaReportParameters
  extends _UFEFactorValuesByLocalAreaReportParameters {
  constructor: { new (): UFEFactorValuesByLocalAreaReportParameters };
}
export var UFEFactorValuesByLocalAreaReportParameters: {
  new (): UFEFactorValuesByLocalAreaReportParameters;
};

/** Purpose - Parameter definition for UFE Validation Report
 * Report Name - UFEValidation
 * MSATS Reports - RM46 */
interface _UFEValidationReportParameters extends _BaseReportParameters {
  LocalArea?: string;
  SettlementCase: number;
}
export interface UFEValidationReportParameters
  extends _UFEValidationReportParameters {
  constructor: { new (): UFEValidationReportParameters };
}
export var UFEValidationReportParameters: {
  new (): UFEValidationReportParameters;
};

/** Purpose - Uniquely identify the associated data element or attribute.
 * Detail - Note that unique identifiers do not have to be globally unique, only unique to a particular sender. However, the length has been chosen such that UUIDs can be used as identifiers if considered appropriate, guaranteeing global uniqueness. */
export type UniqueIdentifier = string;
type _UniqueIdentifier = Primitive._string;

/** Purpose - Define Units of Measure. Application logic to decide which of these are valid for a given fuel type. */
export type UnitsOfMeasure =
  | "CFF"
  | "CM"
  | "DAY"
  | "EA"
  | "GAL"
  | "GJ"
  | "HR"
  | "KRH"
  | "KV"
  | "KVA"
  | "MTH"
  | "KVB"
  | "KVR"
  | "KW"
  | "KWH"
  | "MJ"
  | "MVA"
  | "MWH"
  | "MW"
  | "PF"
  | "VA"
  | "VAR"
  | "W"
  | "WH";
interface _UnitsOfMeasure extends Primitive._string {
  content: UnitsOfMeasure;
}

/** Purpose - Define the reasons for provision of details notification. */
export type UpdateReason = "Update" | "Reconciliation";
interface _UpdateReason extends Primitive._string {
  content: UpdateReason;
}

/** Purpose - Defines a list of valid update statuses */
export type UpdateStatus = "New" | "Update" | "Delete";
interface _UpdateStatus extends Primitive._string {
  content: UpdateStatus;
}

/** Upper limit on the output elements */
export type UpperLimit = number;
type _UpperLimit = Primitive._number;

export type UsagePrecedenceType = number;
type _UsagePrecedenceType = Primitive._number;

/** Schema - RemoteService.  User definitions block */
interface _UserDefData extends BaseType {
  UserDef1?: string;
  UserDef10?: string;
  UserDef2?: string;
  UserDef3?: string;
  UserDef4?: string;
  UserDef5?: string;
  UserDef6?: string;
  UserDef7?: string;
  UserDef8?: string;
  UserDef9?: string;
}
export interface UserDefData extends _UserDefData {
  constructor: { new (): UserDefData };
}
export var UserDefData: { new (): UserDefData };

/** This element is used to define the User definitions as agreed between initiator and recipient. */
export type UserDefinition = string;
type _UserDefinition = Primitive._string;

export type UserProfieType =
  | "UPF"
  | "UBPF"
  | "UIPF"
  | "RPF"
  | "SPF"
  | "UUAFGPF";
interface _UserProfieType extends Primitive._string {
  content: UserProfieType;
}

/** MSATS Data Model Column - VoltageTransformerAccuracyClass */
export type VoltageTransformerAccuracyClass = string;
type _VoltageTransformerAccuracyClass = Primitive._string;

/** MSATS Data Model Column - VoltageTransformerLocation */
export type VoltageTransformerLocation = string;
type _VoltageTransformerLocation = Primitive._string;

/** MSATS Data Model Column - VoltageTransformerRatio */
export type VoltageTransformerRatio = string;
type _VoltageTransformerRatio = Primitive._string;

/** MSATS Data Model Column - VoltageTransformerType */
export type VoltageTransformerType = string;
type _VoltageTransformerType = Primitive._string;

/** Indicates whether the site is connected at High or Low voltage. */
export type VoltageType = string;
type _VoltageType = Primitive._string;

interface _WholesaleInformationRequest extends BaseType {
  version?: r20;
  InformationRequestData: WholesaleInformationRequestData;
}
export interface WholesaleInformationRequest
  extends _WholesaleInformationRequest {
  constructor: { new (): WholesaleInformationRequest };
}
export var WholesaleInformationRequest: { new (): WholesaleInformationRequest };

interface _WholesaleInformationRequestData extends BaseType {}
export interface WholesaleInformationRequestData
  extends _WholesaleInformationRequestData {
  constructor: { new (): WholesaleInformationRequestData };
}
export var WholesaleInformationRequestData: {
  new (): WholesaleInformationRequestData;
};

interface _WholesaleInformationResponse extends BaseType {
  version?: r20;
  Event?: Event[];
  InformationResponseData: WholesaleInformationResponseData;
}
export interface WholesaleInformationResponse
  extends _WholesaleInformationResponse {
  constructor: { new (): WholesaleInformationResponse };
}
export var WholesaleInformationResponse: {
  new (): WholesaleInformationResponse;
};

interface _WholesaleInformationResponseData extends BaseType {}
export interface WholesaleInformationResponseData
  extends _WholesaleInformationResponseData {
  constructor: { new (): WholesaleInformationResponseData };
}
export var WholesaleInformationResponseData: {
  new (): WholesaleInformationResponseData;
};

interface _WholesaleRetrieveRequest extends BaseType {
  version?: r20;
  RetrieveRequestData: WholesaleRetrieveRequestData;
}
export interface WholesaleRetrieveRequest extends _WholesaleRetrieveRequest {
  constructor: { new (): WholesaleRetrieveRequest };
}
export var WholesaleRetrieveRequest: { new (): WholesaleRetrieveRequest };

interface _WholesaleRetrieveRequestData extends BaseType {}
export interface WholesaleRetrieveRequestData
  extends _WholesaleRetrieveRequestData {
  constructor: { new (): WholesaleRetrieveRequestData };
}
export var WholesaleRetrieveRequestData: {
  new (): WholesaleRetrieveRequestData;
};

interface _WholesaleRetrieveResponse extends BaseType {
  version?: r20;
  Event?: Event[];
  RetrieveResponseData: WholesaleRetrieveResponseData;
}
export interface WholesaleRetrieveResponse extends _WholesaleRetrieveResponse {
  constructor: { new (): WholesaleRetrieveResponse };
}
export var WholesaleRetrieveResponse: { new (): WholesaleRetrieveResponse };

interface _WholesaleRetrieveResponseData extends BaseType {}
export interface WholesaleRetrieveResponseData
  extends _WholesaleRetrieveResponseData {
  constructor: { new (): WholesaleRetrieveResponseData };
}
export var WholesaleRetrieveResponseData: {
  new (): WholesaleRetrieveResponseData;
};

interface _WholesaleSearchRequest extends BaseType {
  version?: r20;
  SearchRequestData: WholesaleSearchRequestData;
}
export interface WholesaleSearchRequest extends _WholesaleSearchRequest {
  constructor: { new (): WholesaleSearchRequest };
}
export var WholesaleSearchRequest: { new (): WholesaleSearchRequest };

interface _WholesaleSearchRequestData extends BaseType {}
export interface WholesaleSearchRequestData
  extends _WholesaleSearchRequestData {
  constructor: { new (): WholesaleSearchRequestData };
}
export var WholesaleSearchRequestData: { new (): WholesaleSearchRequestData };

interface _WholesaleSearchResponse extends BaseType {
  version?: r20;
  Event?: Event[];
  SearchResponseData: WholesaleSearchResponseData;
}
export interface WholesaleSearchResponse extends _WholesaleSearchResponse {
  constructor: { new (): WholesaleSearchResponse };
}
export var WholesaleSearchResponse: { new (): WholesaleSearchResponse };

interface _WholesaleSearchResponseData extends BaseType {}
export interface WholesaleSearchResponseData
  extends _WholesaleSearchResponseData {
  constructor: { new (): WholesaleSearchResponseData };
}
export var WholesaleSearchResponseData: { new (): WholesaleSearchResponseData };

interface _WholesaleSubmitRequest extends BaseType {
  version?: r20;
  SubmitRequestData: WholesaleSubmitRequestData;
}
export interface WholesaleSubmitRequest extends _WholesaleSubmitRequest {
  constructor: { new (): WholesaleSubmitRequest };
}
export var WholesaleSubmitRequest: { new (): WholesaleSubmitRequest };

interface _WholesaleSubmitRequestData extends BaseType {}
export interface WholesaleSubmitRequestData
  extends _WholesaleSubmitRequestData {
  constructor: { new (): WholesaleSubmitRequestData };
}
export var WholesaleSubmitRequestData: { new (): WholesaleSubmitRequestData };

interface _WholesaleSubmitResponse extends BaseType {
  version?: r20;
  Event?: Event[];
  SubmitResponseData: WholesaleSubmitResponseData;
}
export interface WholesaleSubmitResponse extends _WholesaleSubmitResponse {
  constructor: { new (): WholesaleSubmitResponse };
}
export var WholesaleSubmitResponse: { new (): WholesaleSubmitResponse };

interface _WholesaleSubmitResponseData extends BaseType {}
export interface WholesaleSubmitResponseData
  extends _WholesaleSubmitResponseData {
  constructor: { new (): WholesaleSubmitResponseData };
}
export var WholesaleSubmitResponseData: { new (): WholesaleSubmitResponseData };

/** Purpose - Define the structure of Work details. */
interface _WorksDetail extends BaseType {
  FieldWorkCompleteDateTime: Date;
  NewMeterEquipment?: NewEquipment;
  RemovedMeteringEquipments?: RemovedMeteringEquipments;
  TotalInstalledControlEquipment?: number;
  TotalInstalledMeters?: number;
  TotalInstalledNetworkDevices?: number;
  TotalInstalledTransformers?: number;
  TotalRemovedMeters?: number;
  TotalRemovedOther?: number;
  WorkType: WorkType;
}
export interface WorksDetail extends _WorksDetail {
  constructor: { new (): WorksDetail };
}
export var WorksDetail: { new (): WorksDetail };

/** Purpose - Define the fixed work types for metering equipment works.
 * Version 1.0 additions
 * - Exchange Equipment
 * - Install Equipment
 * - Remove Equipment
 * - Relocate */
export type WorkType =
  | "Exchange Equipment"
  | "Install Equipment"
  | "Remove Equipment"
  | "Relocate";
interface _WorkType extends Primitive._string {
  content: WorkType;
}

/** Purpose - Yes/No indication
 * Detail - Note that these values are case sensitive. */
export type YesNo = "Yes" | "No";
interface _YesNo extends Primitive._string {
  content: YesNo;
}

export interface document extends BaseType {
  /** Purpose - The top level element for all aseXML messages
   * Detail - The aseXML schemas make extensive use of type definitions, but must define one element in order that instance documents can be created and validated. This element thus forms the document element for all aseXML messages. */
  aseXML: Envelope;
  /** Purpose - Top level element used when reporting transport level errors, e.g. decompression failures
   * Detail - There may be a number of error conditions detected by a transport receiving an aseXML message, that prevent it detecting a valid message. In order that these can be reported as XML in a consistent fashion, this top level element may be used.
   *
   * It should be noted that this element is not to be used via the ref="Event" mechanism of XML Schema.
   * Rather, this should always be achieved via a type="Event" attribute. For an example, refer to
   * the acknowledgements schema. */
  Event: Event;
}
export var document: document;
