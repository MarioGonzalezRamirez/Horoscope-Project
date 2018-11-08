var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]


var images = ["img/aquarius.jpg","img/pisces.jpg","img/aries.jpg","img/taurus.jpg","img/gemini.jpg","img/cancer.jpg","img/leo.jpg",
    "img/virgo.jpg","img/libra.jpg","img/scorpio.jpg","img/sagittarius.jpg","img/capricorn.jpg"];


function start() {
    var name = document.getElementById("name").value;
    var birthMonth = document.getElementById("month").value;
    var birthDay = document.getElementById("days").value;
    var sign = determineSign(birthMonth, birthDay);
    var bDay = determineBirthDay(birthMonth, birthDay);
    var ZeroName = noName(name);
    var ZeroDate = noDate(birthMonth, birthDay);
    if(ZeroDate  == false){
        //warn
        return false;
    }
    if(ZeroName == false) {
        //warn
        return false;
    }
    document.getElementById("messages").innerHTML = "Hi " + name + "! " + bDay +  " Your sign is: " + signs[sign];
    document.getElementById("messagesTwo").innerHTML = messages[sign];
    document.getElementById("image").src = images[sign];
}
function determineBirthDay(month, day){
    var isBirthDay = "";
    var now = new Date();
    if(now.getMonth() + 1 == month && now.getDate() == day) {
        isBirthDay = "Happy Birthday!"
    }
    return isBirthDay;
}

function noName(name){
    if(!name){
        alert("Please Enter Your Name");
        return false;
    }
    return true;
}

function noDate(month, day){
    if(month == 2 && day > 28){
        alert("Invalid Date");
        return false;
    }
    if(month == 4 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 6 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 9 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 11 && day > 30){
        alert("Invalid Date");
        return false;
    }
    return true;
}




function determineSign(month,day) {
    if(month == 1 && day >= 20 || month == 2 && day <= 19){
        return 0;
    }
    if(month == 2 && day >= 20 || month == 3 && day <= 20) {
        return 1;
    }
    if(month == 3 && day >= 21 || month == 4 && day <= 20){
        return 2;
    }
    if(month == 4 && day >= 21 || month == 5 && day <= 20){
        return 3;
    }
    if(month == 5 && day >=21 || month == 6 && day <= 20) {
        return 4;
    }
    if(month == 6 && day >= 21 || month == 7 && day <= 22){
        return 5;
    }
    if(month == 7 && day >= 23 || month == 8 && day <= 22){
        return 6;
    }
    if(month == 8 && day >= 23 || month == 9 && day <= 22){
        return 7;
    }
    if(month == 9 && day >= 23 || month == 10 && day <= 22){
        return 8;
    }
    if(month == 10 && day >= 23 || month == 11 && day <= 22){
        return 9;
    }
    if(month == 11 && day >= 23 || month == 12 && day <= 21){
        return 10;
    }
    if(month == 12 && day >= 22 || month == 1 && day <= 19){
        return 11;
    }
}


var messages =["Your past mistakes are definitely lessons you should learn from, but try not to let them paralyze you. You can't let" +
"yourself be intimidated by what might happen ... you just have to trust yourself that you can do it. Now is not the time for mulling " +
"things through, reviewing all the options, or debating pros and cons. No -- it's the day to grab the bull by the horns and show no " +
"fear. By putting on an award-winning bravery act, you will fool yourself into believing you're fearless!", "Relatives or neighbors" +
" may come to you today asking for favors. Some may know exactly what buttons to push in order to get you to do what they want. " +
"Don't be sucked into guilt or other negative emotions. Help others if you wish, Pisces, but recognize that you're doing it " +
"because you want to and not because you feel you have to. You might even learn something about yourself in the process.", "A " +
"temporary lack of belief in your abilities might have you hesitating to start a project or take on a task that you'd normally snap " +
"up. This could involve something you've wanted to try or helping someone else. Your faith in yourself should never flag, but if it" +
" does, it's important to remember that hard work can be as important as talent - and you aren't afraid of that!", "A phone " +
"conversation with someone who lives far away might have you feeling a bit sad, reflecting on how much you miss that person. " +
"This can lead to pondering about your life. You might question the direction you seem to be moving in, and consider other possible " +
"options. You're likely to be cautious when it comes to making final decisions, Taurus. You will consider every detail.", " Today you " +
"might be in a reflective and meditative mood. You may think about mundane matters, such as how to increase your income, or more complex" +
" issues, such as the purpose of life. You aren't likely to want to do much socializing today, Gemini. It's probably the perfect day to stay" +
" in, relax, and enjoy your own company. Reading could prove especially informative now.", "Obligations to friends and groups could " +
"interfere with time that you want to spend with your partner. A number of visitors in your home might demand more of your time, energy, " +
"and attention, and you might find this disconcerting. You're no one's servant, Cancer. You're entitled to enjoy yourself. Save some time" +
" for your mate at the end of the day.", "You might wake up this morning and decide your home is a total wreck. The desire to spend the day " +
"cleaning and sprucing up your house might prove almost obsessive. Do what you have to do, but don't get so caught up that you forget about" +
" the big picture. Whatever you do today, Leo, view it in its proper perspective. The world won't end if your house isn't flawlessly clean.",
    "Extra time and attention that you have been devoting to your career should pay off about now. You've worked hard to be where you are," +
    " and you aren't through climbing the ladder of success just yet. You aren't likely to rest on your laurels. Today you might spend a lot " +
    "of time planning your next goal. A little ingenuity will definitely pay off here, Virgo. Use whatever advantages you have.","An older " +
    "male visitor could come to your home, possibly to help you with some work that needs to be done. Family members may have abandoned you " +
    "for the day to go out and do their own thing. You will welcome the company as well as the help. Practical matters, such as the household" +
    " budget, might need attention, so set aside some time to work out the details.", "Today you might perform some service to people who" +
    " live in your neighborhood. Perhaps you will chauffeur people around to do their shopping. Perhaps you will help people with household" +
    " tasks. Pets may also need some attention. Whatever it is, you will enjoy it, and be appreciated as well. Expect to have a very busy " +
    "day. You will certainly sleep soundly tonight.", " Meticulous and sincere effort on your part may have led to a recent increase in " +
    "income. Today you might be thinking of reworking your budget. While others might throw caution to the wind at a time like this, " +
    "today you might go too far in the opposite direction. Be careful and realistic, Sagittarius, but don't be overly frugal. You've " +
    "worked hard to get where you are and you deserve a reward.", "A sense of duty toward family members, children, and your sweetheart " +
    "may cause you to take on responsibilities today that you wouldn't normally assume. Sincere efforts on behalf of those you care about " +
    "are likely to bring the results you want. It won't just make you happy but will also please those you are helping. This not only " +
    "makes you feel appreciated, it will also boost your physical strength."];




