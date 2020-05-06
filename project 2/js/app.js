function search() {
    let inputVal = document.getElementById("searchInput").value;
    // inputVal is the value of what you search
    // write your fetch() code here and use result.json() to JSONify your result
    // use fill_data(result) to append your result on the website

    document.getElementById("searchInput").value = "";

}


function fill_data(result) {
    document.getElementById("music_list").innerHTML = "";
    for (let i = 0; i < result.tracks.data.length; i++) {
        let node = document.createElement("div");
        node.setAttribute("class", "col-md-6 col-lg-3");
        node.setAttribute("data-aos", "fade-up");
        node.setAttribute("data-aos-delay", "100");
        node.setAttribute("id", "item" + i);
        node.setAttribute("style", "padding-top: 30px;")
        node.innerHTML = result_generator(result.tracks.data[i], i);
        document.getElementById("music_list").appendChild(node);
        
    }
}

function result_generator(data, id){
    let result  = ("<a href=\"" + data.url + "\" id=\"result_link_" + id + "\" class=\"unit-9\">");
        result += ("\n <div class=\"image\" id=\"result_image_" + id + "\" style=\"background-image: url('"+ data.album.images[2].url + "');\"></div>");
        result += ("\n <div class=\"unit-9-content\" >");
        result += ("<h2 id=\"result_name_" + id + "\">" + data.name + "</h2>");
        result += ("<span id=\"result_album_" + id + "\">" + data.album.name + "</span>");
        result += ("<span id=\"result_author_" + id + "\">" + data.album.artist.name + "</span>");
        result += ("\n </div> \n </a>");
    return result;
}




$(document).ready(function () {
    console.log('ready to go')
});
