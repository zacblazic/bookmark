'use strict';

angular.module('announcements.controllers', [])
  .controller('AnnouncementsController', function() {
  	this.announcements = [{
  		date: new Date().setMonth(2),
  		title: "Launched!",
  		body: "We are now live!"
  	}, {
  		date: new Date().setDate(1),
  		title: "New Developer",
  		body: "We have a new developer in the house!"
  	}]
  });
