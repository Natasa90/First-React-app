const object ={
    prop: 42, 
    func: function myF () {
        return this.prop
    }
}
console.log(object.func())