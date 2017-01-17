function createData(obj) {

    var data = {};

    return {
        set: function(key,value){
            if(key&&value){
                data[key]=value;
            }
        },
        get:function(key){
            return data[key];
        }
    };

}

var data = createData();

data.set("name", "Konrad");

console.log( data.get("name") );















