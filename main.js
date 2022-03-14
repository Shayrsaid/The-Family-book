var images = ["Family book.jpg","Zarrar_Photo.jpg","Mom_photo.jpg", "Nano.jpg", "Nana baba.jpg", "dada.jpg", "Dado.jpg"];
var names = ["Family Book","Zarrar said (Dad)", "Maleeha naipaul (Mom)", "Nadira naipaul (Grandmother on mom's side)", "V.S Naipaul (Grandfather on mom's side)","Asif said (Grandfather on father's side)","Shannaz tiwana (Grandmother on dad's side. The woman on the left.)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
