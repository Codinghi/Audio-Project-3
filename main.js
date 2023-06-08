dogsound = 0;
catsound = 0;
roarsound = 0;
background = 0;

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PtE_NRGeL/model.json', modelReady);
};

function modelReady(){
classifier.classify(gotResults);
};

function gotResults(error, results){
    if (error){
    console.error = error;
    } else{
        console.log = results;
        random_number_r = Math.floor(Math.random()*225) + 1;
        random_number_g = Math.floor(Math.random()*225) + 1;
        random_number_b = Math.floor(Math.random()*225) + 1;
        document.getElementById("animal-being-heard").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("animal-being-heard").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("accuracy").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")"
        
        img = document.getElementById("thing-heard-img");

        if (results[0].label == "Dog"){
            img.src = 'dog.jpg';
        } else if(results[0].label == "Cat"){
            img.src = 'cat.png';
        } else if(results[0].label == "Roaring"){
            img.src = 'tiger.jpg';
        } else{
            img.src = 'istockphoto-1268414791-612x612.jpg';
        }
    } 
}

