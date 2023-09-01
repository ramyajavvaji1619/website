let petImageUrl ={
     Dog: "https://e1.pxfuel.com/desktop-wallpaper/825/563/desktop-wallpaper-puppy-iphone-dog-mobile-phone-backgrounds-dog-iphone-11-thumbnail.jpg",
     Cat:"https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2014/09/cute-kittens.jpg",
     Parrot:"https://t3.ftcdn.net/jpg/05/44/49/54/360_F_544495402_Y1IPsOFjNUL7HrDChNFCLHBxrzxLNQ5b.jpg",
     Spider:"https://us.123rf.com/450wm/manfredxy/manfredxy0908/manfredxy090800011/5405512-green-spider-in-its-web.jpg?ver=6",
     Rabbit:"https://e0.pxfuel.com/wallpapers/383/973/desktop-wallpaper-white-rabbit-cute-rabbit.jpg",

};
        
        let petSelectEl=document.getElementById("petSelect");
        let petImgEl=document.getElementById("petImg");
           
        petSelectEl.addEventListener("change",function(event){
            let petSelectEl=event.target.value ;
            let selectPetImageUrl=petImageUrl[petSelectEl];
            petImgEl.src=selectPetImageUrl;
        })






      
        