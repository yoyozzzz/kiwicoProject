 // angular js
 angular.module('myApp',['ui.bootstrap']).controller('tabDemo',function($scope,$window){
            $scope.tabs = [
            {title : 'Convenient' ,content : '"I enjoy crafting with my daughter, but do not have the time to research the activities and buy all the supplies. I like that everything comes to my door and we can start an activity right away."', subContent : 'Jane X, Koala Crate subscriber since 2016', images : 'image/item1.png',style : 'width: 150px;'},
            {title : 'Sparks Creativity' ,content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ligula cursus nulla pellentesque rutrum. Aliquam mattis fermentum quam, vel auctor metus pulvinar et.'},
            {title : 'Educational' ,content : '"My daughter is a sponge for STEM projects and this is the perfect solution to constantly searching for new things to keep her engaged."', images : 'image/item2.jpg', style : 'width: 150px; border-radius: 50%;'},
            {title : 'Family Time' ,content : '"Mauris sodales ex vel ornare fermentum. Nulla luctus erat magna, eget efficitur mauris iaculis sed. Donec suscipit condimentum turpis, eget consectetur ipsum congue a. Suspendisse faucibus tincidunt nisl at porta. Aenean tempus rutrum ligula eu scelerisque.​ Cras elementum nisi vel felis lacinia, et volutpat leo scelerisque."'},
            {title : 'Fun' ,content : '"Maecenas aliquam pellentesque velit et egestas. Aliquam ac tortor et nibh pretium pharetra!"'},
            {title : 'Alternative to Screen Time' ,content : '"Nam sodales nunc non gravida ornare. Sed in tincidunt urna. Nam fringilla, purus non commodo pretium, ex neque interdum lectus, ac egestas magna nisl sed arcu. Morbi elit enim, accumsan sed nunc non."', subContent : 'Mattis mollis nisl'}
            ];
        });