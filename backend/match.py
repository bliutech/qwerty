import json

global_classes = ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"]
global_pronouns = ["he/him", "he/him", "they/them", "she/they", "he/they", "he/him", "they/he", "he/she/they", "other"]
databaseOfLists = []


# Python3 code to remove whitespace
def remove(string):
    return string.replace(" ", "")

#getters for json object; not sure if we need them
def getName(json):
    return json.name

def getPronouns(json):
    if json.pronoun == "other":
        return json.pronounOther
    return json.pronoun

def getContact(json):
    return json.contact

def getClasses(json):
    return json.classes

def getNumClass(json):
    return json.numClass

def getBlurb(json):
    return json.blurb

#match functions
def match_classes(class_list, database_list):
    for c in class_list:
        for d in database_list:
            if remove(c).upper() == remove(d).upper():
                return True
    return False

#if json.pronoun== "other" the string passed in should be pronounOther
def match_pronouns(string, database_pronoun):
    if remove(string).lower() == remove(database_pronoun).lower():
            return True
    return False

def any_match_pronouns(string, databaseOfLists):
    for d in databaseOfLists:
        if remove(string).lower() == d["pronoun"].lower():
            return True
    return False

def match(json):
    index = []
    if not any_match_pronouns(json["pronoun"], databaseOfLists):
        for i, person in enumerate(databaseOfLists):
            if match_classes(json["classes"], person["classes"]):
                index.append(i)
    else:
        for i, person in enumerate(databaseOfLists):
            if match_classes(json["classes"], person["classes"]) and match_pronouns(json["pronoun"], person["pronoun"]):
                index.append(i)
    return index


data_set = {"classes": ["math"], "pronoun": "they/them"}
json_one = json.dumps(data_set)
json_obj = json.loads(json_one)
data_set_two = {"classes": ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"], "pronoun": "she/her"}
json_two = json.dumps(data_set_two)
json_obj2 = json.loads(json_two)
data_set_three = {"classes": ["MATH 32B" , "ENGR 96A", "CS 32", "CS 33"], "pronoun": "he/him"}
json_three = json.dumps(data_set_three)
json_obj3 = json.loads(json_three)
databaseOfLists.append(json_obj2)
databaseOfLists.append(json_obj3)
print (match(json_obj))




