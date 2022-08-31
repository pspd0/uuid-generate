function Generate(count) {
    let items = [];
    function uuid() {
        const hex = "0123456789ABCDEFG";
        const model = "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx";
        var str = "";
        for (var i = 0; i < model.length; i++) {
            var random = Math.floor(Math.random() * hex.length);
            str += model[i] == "x" ?  hex[random] : model[i] ;
        };
        return str.toLowerCase();
    };

    if(count == null) {
        items = {uuid: uuid()};
        return items
    } else {
        if(typeof count == 'number') {
            if(count == 0) throw new Error("Count is 0");
            for(let i = 0; i<count; i++) {
                items[i] = {uuid: uuid()};
            };

            return items
        };
    };
};
 
console.log(Generate(10));
