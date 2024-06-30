
export class UIText{
    constructor (public UITextID:number,public Key:string,public Text:MultiLanguageText){}
}
export class MultiLanguageText{
    constructor (public TextEn:string,public TextFr:string,public TextSp:string){}
}