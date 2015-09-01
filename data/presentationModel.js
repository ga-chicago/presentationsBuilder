/**
 * Created by codeforcoffee on 8/31/15.
 */

var model = function(
  cohortName,
  topic,
  quizQuestions,
  learningObjectives,
  numOfSlides,
  labName,
  labDescription){

    this.attributes = {};

    this.attributes.cohortName = cohortName;
    this.attributes.topic = topic;
    this.attributes.quizQuestions = quizQuestions;
    this.attributes.learningObjectives = learningObjectives;
    this.attributes.numOfSlide = numOfSlides;
    this.attributes.labName = labName;
    this.attributes.labDescription = labDescription;

    return this.attributes;

};

module.exports = model;
