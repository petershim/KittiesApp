(function(){
	angular
	    .module('kittiesApp')
	    .controller('KittiesController', KittiesController);

			function KittiesController(){
				//Create self variable to not pollute global name space with 'this'
				var self = this;
				self.kittiesList =
					[
							{
								catName: 'Karl',
								monthsOld: 5,
								gender: 'boy',
								image: "images/carl.png",
								adopted: true,
							},
							{
								catName: 'Jack',
								monthsOld: 4,
								gender: 'boy',
								image: "images/jack.png",
								adopted: false
							},
							{
								catName: 'Oscar',
								monthsOld: 2,
								gender: 'boy',
								image: "images/oscar.png",
								adopted: false
							},
							{
								catName: 'Princess Mew',
								monthsOld: 3,
								gender: 'girl',
								image: "images/princessmew.png",
								adopted: false
							}

						];
			}

})();
