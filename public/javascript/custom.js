$(function() {
    //banner functions
    banner();

    //make post clickable
    $(".post-container").click(function(){
        window.location = "/unknown";
    });

    //make side post clickable
    $(".side-container").click(function(){
        window.location = "/unknown";
    });

    $(".dummy-banner").click(function(){
        var src = $(this).attr("src");
        var semi = $(".semi-banner");
        // semi.text("");
        semi.find("img").attr("src",src);
        console.log(src)
    });

    function banner(){
        $(".slides:eq(0)").addClass("active");
        $("i.fa.fa-circle:eq(0)").addClass("current");

        $(".prev").click(function(){
            var current = $(this).closest('#banner').find(".active");
            var index = $(".slides").index(current);
            var prev = index - 1;
            console.log(prev)
            if(index != 0){
                display(prev)
            };
            
        });

        $(".next").click(function(){
            var current = $(this).closest('#banner').find(".active");
            var index = $(".slides").index(current);
            var next = index + 1;
            if(index != 2){
                display(next)
            }
        });
    }

    function display(n){
        $(".slides").removeClass("active");
        $(".slides:eq("+ n +")").addClass("active");

        $("i.fa.fa-circle").removeClass("current");
        $("i.fa.fa-circle:eq("+ n +")").addClass("current");
    }
});