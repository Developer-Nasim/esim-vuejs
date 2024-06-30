export class PackageDays{//*
    constructor(public Code:number, public PackageType:PackagesEnum,public Days:number, public Price:number,public Settings:PackageSetting[]){}
}
export enum PackagesEnum {//*
    Eco,
    Medium,
    Business
}
export enum ExtraType {//*
    Surfing,
    MinutesToIsrael,
    MinutesToCountries,
    TransferringCalls, 
    FixedNumberForLife,
    UnlimitedMessages,
    MinutesAndMessagesTo20Countries,
    UnlimitedCalls,
    UnlimitedCallsToIsrael
}
export class ExtraSetting{
    constructor (public Code:string,public Type:ExtraType,public Quantity:number,public Price:number,public OnlyEco:boolean,public Description:string){}
}
export class ExtraOptions{//*
    constructor (public Code:string,public Type:ExtraType,public TextEn:string,public OnlyEcoNew:boolean,public OptionValues:Option[]){}
}
export class PackageSetting{//*
    constructor (public Type:ExtraType,public Quantity:number,public Description:string){}
}
 export class Option{//*-
    constructor(public Code:string,public Quantity:number,public TextEn:string,public USD:number){}
 }

 export class TypePhon{
    constructor(public Code:string,public NamePhon:string,public type:Degem[]){}
 }
 export class Degem{
    constructor(public Code:string,public NamePhon:string){}
 }
