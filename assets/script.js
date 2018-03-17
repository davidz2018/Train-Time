    
    var freq = 15;

    
    var firstTime = "04:00";

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

   
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

   
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

  
    var tRemainder = diffTime % freq;
    console.log(tRemainder);

   
    var mAway = freq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + mAway);

    
    var nxtArriv = moment().add(mAway, "minutes");
    console.log("ARRIVAL TIME: " + moment(nxtArriv).format("hh:mm")); 