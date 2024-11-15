// Source files:
//

interface PrimitiveBaseType {
  _exists: boolean;
  _namespace: string;
}
export interface _any extends PrimitiveBaseType {
  content: any;
}

export interface _boolean extends PrimitiveBaseType {
  content: boolean;
}

export interface _Date extends PrimitiveBaseType {
  content: Date;
}

export interface _number extends PrimitiveBaseType {
  content: number;
}

export interface _string extends PrimitiveBaseType {
  content: string;
}

export interface document extends PrimitiveBaseType {}
export var document: document;
