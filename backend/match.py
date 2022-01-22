import json

global_classes = ["MATH 32B" , "CS 31" , "PHYSICS 1A", "ENGR 96A", "CS 32", "CS 33"]
global_pronouns = ["she/her", "he/him", "they/them", "she/they", "he/they", "they/she", "they/he", "he/she/they", "other"]

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
def match_classes(class_list):
    index = []
    for c in class_list:
        for gc in global_classes:
            if remove(c).upper() == remove(gc).upper():
                index.append(global_classes.index(gc))
    return index

#if json.pronoun== "other" the string passed in should be pronounOther
def match_pronouns(string):
    index = []
    for p in global_pronouns:
        if remove(string).lower() == remove(p).lower():
            index.append(global_pronouns.index(p))
    if len(index) < 1:
        return 0 #if no match was found
    return index

def match(json):
    class_indices = match_classes(json.classes)
    pronoun_indices = match_pronouns(json.pronoun)
    if pronoun_indices == 0:
        return class_indices
    matched_indices = []
    for c in class_indices:
        for p in pronoun_indices:
            if c == p:
                matched_indices.append(c)
    return matched_indices


    

classlist1 = ["cs31","engr 96a", "MATH 32b ", "cs 35l    "," CS 33"]
test = match_classes(classlist1)
for t in test:
    print (t)
test2 = match_pronouns("he/they")
print (test2)



