databaseOfLists = [];

function remove(string){
    return string.replace(" ", "");
}

function getPronouns(json){
    if (json.pronoun == "other"){
        return json.pronounOther;
    }
    return json.pronoun;
}

//match functions
function match_classes(class_list, database_list){
    for (c in class_list){
        for (d in database_list){
            if (remove(c).toUpperCase() == remove(d).toUpperCase()){
                return true;
            }
        }
    }
    return false;
}

//if json.pronoun== "other" the string passed in should be pronounOther
function match_pronouns(string, database_pronoun){
    
    str1 = remove(string);
    str2 = remove(database_pronoun);
    if (str1.toLowerCase() == str2.toLowerCase()){
            return true;
    } 
    return false;
}

function any_match_pronouns(string, databaseOfLists){
    for(d in databaseOfLists){
        if (remove(string).toLowerCase() == d["pronoun"].toLowerCase()){
            return true;
        }
    }
    return false;
}

function match(json){
    index = [];
    if(! any_match_pronouns(json["pronoun"], databaseOfLists)){
        i = 0;
        for (d in databaseOfLists){
            if(match_classes(json["classes"], d["classes"])){
                index.append(i);
            }
            i++;
        }
    }
    else{
        i = 0;
        for (d in databaseOfLists){
            if (match_classes(json["classes"], d["classes"]) && match_pronouns(json["pronoun"], d["pronoun"])){
                index.append(i);
            }
            i++;
        }
    }
    return index;
}

//testing:
let data_set = '{"classes": ["math"], "pronoun": "they/them"}';
//json_one = json.dumps(data_set)
const json_obj = JSON.parse(data_set);
let data_set_two = '{"classes": ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"], "pronoun": "she/her"}';
//json_two = json.dumps(data_set_two)
const json_obj2 = JSON.parse(data_set_two);
let data_set_three = '{"classes": ["MATH 32B" , "ENGR 96A", "CS 32", "CS 33"], "pronoun": "he/him"}';
//json_three = json.dumps(data_set_three)
const json_obj3 = JSON.parse(data_set_three);
databaseOfLists.push(json_obj2);
databaseOfLists.push(json_obj3);
console.log(match(json_obj));

