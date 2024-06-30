//eslint-ignore-nextline
 // eslint-disable-next-line
import { PackageDays, ExtraType,ExtraSetting,PackageSetting,PackagesEnum,Option,ExtraOptions,TypePhon, Degem} from '../models/PackageDays'

   // constructor(public Code:string, public PackageType:PackagesEnum,public days:number, public price:number,public Extras:[ExtraSetting]){}

   export const data = [
    new PackageDays(111, PackagesEnum.Eco, 7, 9.9, [
      new PackageSetting(ExtraType.Surfing, 2, "GB Surfing"),
      new PackageSetting(ExtraType.MinutesToIsrael, 60, "Minutes")
    ]),
    new PackageDays(121, PackagesEnum.Eco, 15, 11.9, [
      new PackageSetting(ExtraType.Surfing, 2, "GB Surfing"),
      new PackageSetting(ExtraType.MinutesToIsrael, 60, "Minutes")
    ]),
     new PackageDays(131, PackagesEnum.Eco, 30, 14.9, [
      new PackageSetting(ExtraType.Surfing, 2, "GB Surfing"),
      new PackageSetting(ExtraType.MinutesToIsrael, 60, "Minutes")
    ]),
    new PackageDays(141, PackagesEnum.Eco, 45, 19.9, [
      new PackageSetting(ExtraType.Surfing, 2, "GB Surfing"),
      new PackageSetting(ExtraType.MinutesToIsrael, 60, "Minutes")
    ]),
    new PackageDays(151, PackagesEnum.Eco, 60, 29.9, [
      new PackageSetting(ExtraType.Surfing, 2, "GB Surfing"),
      new PackageSetting(ExtraType.MinutesToIsrael, 60, "Minutes")
    ]),


    new PackageDays(21, PackagesEnum.Medium, 7, 34.9, [
      new PackageSetting(ExtraType.Surfing, 50, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCallsToIsrael, 0, "Unlimited Calls To Israel"),
      new PackageSetting(ExtraType.MinutesAndMessagesTo20Countries, 180, "Minutes And Massages To 23 Countries")
    ]),
    new PackageDays(22, PackagesEnum.Medium, 15, 36.9, [
      new PackageSetting(ExtraType.Surfing, 50, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCallsToIsrael, 0, "Unlimited Calls To Israel"),
      new PackageSetting(ExtraType.MinutesAndMessagesTo20Countries, 180, "Minutes And Massages To 23 Countries")
    ]),
    new PackageDays(23, PackagesEnum.Medium, 30, 39.9, [
      new PackageSetting(ExtraType.Surfing, 50, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCallsToIsrael, 0, "Unlimited Calls To Israel"),
      new PackageSetting(ExtraType.MinutesAndMessagesTo20Countries, 180, "Minutes And Massages To 23 Countries")
    ]),
    new PackageDays(24, PackagesEnum.Medium, 45, 44.9, [
      new PackageSetting(ExtraType.Surfing, 50, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCallsToIsrael, 0, "Unlimited Calls To Israel"),
      new PackageSetting(ExtraType.MinutesAndMessagesTo20Countries, 180, "Minutes And Messages To 23 Countries")
    ]),
    new PackageDays(25, PackagesEnum.Medium, 60, 54.9, [
      new PackageSetting(ExtraType.Surfing, 50, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCallsToIsrael, 0, "Unlimited Calls To Israel"),
      new PackageSetting(ExtraType.MinutesAndMessagesTo20Countries, 180, "Minutes And Messages To 23 Countries")
    ]),


    new PackageDays(31, PackagesEnum.Business, 7, 39.9, [
      new PackageSetting(ExtraType.Surfing, 100, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCalls, 0, "Unlimited Calls"),
      new PackageSetting(ExtraType.UnlimitedMessages, 0, "Unlimited Messages To 23 Countries")
    ]),
    new PackageDays(32, PackagesEnum.Business, 15, 41.9, [
      new PackageSetting(ExtraType.Surfing, 100, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCalls, 0, "Unlimited Calls"),
      new PackageSetting(ExtraType.UnlimitedMessages, 0, "Unlimited Messages To 23 Countries")
    ]),
     new PackageDays(33, PackagesEnum.Business, 30, 44.9, [
      new PackageSetting(ExtraType.Surfing, 100, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCalls, 0, "Unlimited Calls"),
      new PackageSetting(ExtraType.UnlimitedMessages, 0, "Unlimited Messages To 23 Countries")
    ]),
     new PackageDays(34, PackagesEnum.Business, 7, 49.9, [
      new PackageSetting(ExtraType.Surfing, 100, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCalls, 0, "Unlimited Calls"),
      new PackageSetting(ExtraType.UnlimitedMessages, 0, "Unlimited Massages To 23 Countries")
    ]), 
    new PackageDays(35, PackagesEnum.Business, 7, 59.9, [
      new PackageSetting(ExtraType.Surfing, 100, "GB Surfing"),
      new PackageSetting(ExtraType.UnlimitedCalls, 0, "Unlimited Calls"),
      new PackageSetting(ExtraType.UnlimitedMessages, 0, "Unlimited Messages To 23 Countries")
    ]),
  ];
  export const DaysData=[new Option("1d",7,"Days",9.9),new Option("2d",15,"Days",11.9),new Option("3d",30,"Days",14.9),new Option("4d",45,"Days",19.9),new Option("5d",60,"Days",29.9),]
 
  
   // constructor (public code:string,public Type:ExtraType,public description:string,public onlyEco:boolean,public Options:Option[]){}


//export const ExtraData=[new ExtraOptions('surfing',ExtraType.Surfing,"Additional surfing",true,[new Option("5g",5,"G",10),new Option("10g",10,"G",18),new Option("20g",20,"G",25)]),
//new ExtraOptions('exMinTIsr',ExtraType.MinutesToIsrael,"Extra minutes to israel",true,[new Option("60mI",60,"Minutes",10),new Option("120mI",120,"Minutes",15)]),
//new ExtraOptions('exMitoCountries',ExtraType.MinutesToCountries,"Extra minutes to 23 countries",true,[new Option("60mC",60,"Minutes",10),new Option("120mC",120,"Minutes",15)]),
//new ExtraOptions('TrCalls',ExtraType.TransferringCalls,"Transferring calls",false,[new Option("InterNumb",0,"International numb",5)]),
//new ExtraOptions('fxnumlife',ExtraType.FixedNumberForLife,"Fixed number for life",false,[new Option("IsNumb",0,"Israeli number",20)])];
 

export const Phons=[new TypePhon('appI','apple - iphone',[new Degem('14','iphone 14, mini,pro, pro max'),new Degem('13','iphone 13, mini,pro, pro max'),new Degem('11','iphone 11, mini, pro, pro max'),new Degem('xs','iphone xs, xs max ,xr'),new Degem('se','iphone se (2020,2022)'),new Degem('ipod','ipod'),new Degem('apw','apple watch'),new Degem('other','other')])]