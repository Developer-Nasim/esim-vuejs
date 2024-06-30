import type {
    TimeHTMLAttributes
} from "vue";

export class orderLine {
    static find(arg0: (x: any) => boolean) {
        throw new Error('Method not implemented.');
    }
    static findIndex(arg0: (x: any) => any) {
        throw new Error('Method not implemented.');
    }

    public IsraeliNumber = "";
    public InternationalNum = "";
    public SimNumber = "";
    public LineMeters: LineMeters | null = null;
    public Package = PackagesEnum.Eco;

    //NumDays: any;
    constructor(public OrderLineDTOId: number, public price: number //
        , public RandomCartId: string, public CodeNumDays: number, public StartDate: Date, public lang: UITextEnum, public currency: CurrencyEnum, public AddCodeSurfing: string, public EMinutesToisrael: string, public EMinutesTo23Countries: string, public TransferringCalls: string, public FixedNumberForLife: string, public CodeBrandPhon: string, public CodeDegemPhon: string
    ) {

    }


}
export enum UITextEnum {
    En,
    Fr,
    Sp
}
export enum CurrencyEnum {
    USD,
    EUR
}
export enum PackagesEnum {
    Eco,
    Medium,
    Business
}


export class LineMeters {
    public DataInitialValue = 0;
    public DataValue = 0;
    public SmsNationalInitialValue = 0;
    public SmsNationalValue = 0;
    public SmsIntlInitialValue = 0;
    public SmsIntlValue = 0;
    public CallNationalInitialValue = 0;
    public CallNationalValue = 0;
    public CallIntlInitialValue = 0;
    public CallIntlValue = 0;
}


export class dayPrice {
    constructor(public Days: number, public price: number) { }
}
//export default(t:any)=>;
//public