import {Circle} from './circle';
import {Rectangle} from './rectangle';

var acircle=new Circle(2.5);
acircle.area();
acircle.display();


var arectangle =new Rectangle(2,3);
arectangle.area();
arectangle.display();

arectangle.setLength(5);
arectangle.setBreadth(10);
arectangle.area();
arectangle.display();
