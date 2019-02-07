module.exports ={
    inventory(data){
        var rice =data.Rice
        var pulse=data.Pulses
        var wheat=data.Wheat
        var totalvaluerice=0
        var totalvaluepulse=0
        var totalvaluewheat=0
        for(let key in rice)
        {
           var num=rice[key].weight*rice[key].price
           totalvaluerice=totalvaluerice+num
        }
        console.log("total value of rice is:"+totalvaluerice)
        for(let key in pulse)
        {
           var num=pulse[key].weight*pulse[key].price
           totalvaluepulse=totalvaluepulse+num
        }
        console.log("total value of pulse is:"+totalvaluepulse)
        for(let key in wheat)
        {
           var num=wheat[key].weight*wheat[key].price
           totalvaluewheat=totalvaluewheat+num
        }
        console.log("total value of wheat is:"+totalvaluewheat)
        
        


    }
}