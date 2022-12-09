class central_tendency{
    constructor(...numbers){
        this.numbers = numbers
    }

    get Mean(){
        return this.meanProcess
    }
    get Range(){
        return this.rangeProcess
    }
    meanProcess(){
             // sum number
             let sum = this.numbers.reduce((a,b) =>{
                return a + b
             })
             // sum number of numbers
             let length = this.numbers.length
             // divide 
      let mean = sum/length
             return mean
    }
    rangeProcess(){
        let large = this.numbers
        let max = Math.max(...large)
        let min = Math.min(...large)
        return max - min
    }
    
}
const calCentral_tendency  = new central_tendency(1,2,3,4,5,6)
console.log(calCentral_tendency.Mean())
console.log(calCentral_tendency.Range())