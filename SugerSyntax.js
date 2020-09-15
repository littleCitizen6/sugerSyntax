function stringFormat(str, dictionary){
    const regex = RegExp( "{\\w*}");
    var word;
    while((word= regex.exec(str)) !== null){
        str = str.replace(RegExp(word[0]), dictionary[word[0].substring(1,word[0].length -1)]);
    }
    console.log(str);
}