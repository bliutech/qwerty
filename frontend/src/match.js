let databaseOfLists = [];

function remove(stri){
    let s = stri.replace(/\s/g, "");
    return s;
}

function getPronouns(json){
    if (json.pronoun == "other"){
        return json.pronounOther;
    }
    return json.pronoun;
}

//match functions
function match_classes(class_list, database_list){
    let boolMatch = false;
    class_list.forEach((c) => {
        database_list.forEach((d) => {
            if (remove(c).toUpperCase() == remove(d).toUpperCase()){
                boolMatch = true;
                return;
            }
        });
    });
    return boolMatch;
}

// if json.pronoun== "other" the string passed in should be pronounOther
function match_pronouns(stri, database_pronoun){
    if (remove(stri).toLowerCase() === remove(database_pronoun).toLowerCase()){
        return true;
    } 
    return false;
}

function any_match_pronouns(string, databaseOfLists){
    let boolMatch = false;
    databaseOfLists.forEach((d) => {
        if (remove(string).toLowerCase() == d["pronouns"].toLowerCase()){
            boolMatch = true;
            return;
        }
    });
    return boolMatch;
}

function match(json, databaseOfLists){
    let index = [];
    if(! (any_match_pronouns(json.pronouns, databaseOfLists))){
        databaseOfLists.forEach((d, i) => {
            if(match_classes(json["classes"], d["classes"])){
                index.push(d.key);
            }
        });
    }
    else{
        databaseOfLists.forEach((d, i) => {
            if (match_classes(json["classes"], d["classes"]) && match_pronouns(json["pronouns"], d["pronouns"])){
                index.push(d.key);
            }
        });
    }
    return index;
}

export default match;

// //testing:
// let data_set =  '{"classes": ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"], "pronouns": "he-him"}';
// //json_one = json.dumps(data_set)
// const json_obj = JSON.parse(data_set);
// let data_set_two =  '{"classes": ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"],"pronouns": "she-her"}';
// //json_two = json.dumps(data_set_two)
// const json_obj2 = JSON.parse(data_set_two);
// let data_set_three =  '{"classes": ["MATH 32B" , "ENGR 96A", "CS 32", "CS 33"],"pronouns": "he-him"}';
// //json_three = json.dumps(data_set_three)
// const json_obj3 = JSON.parse(data_set_three);
// databaseOfLists.push(json_obj2);
// databaseOfLists.push(json_obj3);
// console.log(match(json_obj));
