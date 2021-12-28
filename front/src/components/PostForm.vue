<template>
    <div class="nav">
        <form>
            <textarea name="postText" id="postText" 
            cols="30" rows="10" maxlength="270"></textarea>

            <input type="file" id="postImage" name="postImage" 
            accept="image/png, image/jpeg" title=" ">
            <button>
                Publier vôtre post
            </button>
        </form>

    </div>
</template>

<script>
export default{
    name: "PostForm"
}
</script>

<style scoped>  
    form{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;  
    }
    form * {
        margin: 10px;
    }
    #postText{
        border-radius: 5px;
        background-color: #171123 ;
        border: none;
        resize: none;
       
    }
    button{
        background-color: #372248 ;
        border: none;
        padding:10px;
        font-size: 15px;
    }
</style>