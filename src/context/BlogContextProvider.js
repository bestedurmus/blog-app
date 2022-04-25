import { child, getDatabase, onValue, push, query, ref, remove, set, update } from "firebase/database";
import React, { createContext, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [isLoading, setisLoading] = useState();
  const [cardList, setcardList] = useState();

  const addNewBlog = (props) => {
    const db = getDatabase();
    const userRef = ref(db, "contact");
    const newUserRef = push(userRef);
    set(newUserRef, {
      title: props.title,
      imgUrl: props.imgUrl,
      content: props.content,
      email: props.email,
    });
  };

  const getBlogs = () => {
   try{
      setisLoading(true);
      const db = getDatabase();
      const userRef = ref(db, "contact");

      onValue(query(userRef), (snapshot) => {
        const cards = snapshot.val();
        const cardsArray = [];
        for (let id in cards) {
          cardsArray.push({ id, ...cards[id] });
        }
        setcardList(cardsArray);
        setisLoading(false)
      });
      return { cardList };
    }catch(err){
        alert(err.message)
    }
  };

  // const updateBlog = (props) => {
  //   try {
  //     const db = getDatabase()
  //     const postData = {
  //       title: props.title,
  //       imgUrl:props.imgUrl,
  //       content:props.content,
  //       id:props.id

  //     }
  //     const newPostKey = push(child(ref(db), "contact")).key
  //     const updates = {}
  //     updates["/contact/" + newPostKey ] = postData
  //     updates[`/user-contact/` + props.id + "/" + newPostKey ] = postData
  //     return update(ref(db), updates)
  //   } catch (err) {
  //     alert(err.message)
  //   }
  // }

  const updateBlog=(props)=>{
    const db = getDatabase();
    const updates = {};
    updates["contact/"+props.id]=props;
    return update(ref(db),updates);

}


  const deleteBlog = (id) => {
    const db = getDatabase()
    remove(ref(db,"contact/" + id))
    console.log("blog silindi")
  }

  return (
    <BlogContext.Provider value={{deleteBlog, updateBlog, addNewBlog, getBlogs, isLoading, cardList }}>
      {props.children}
    </BlogContext.Provider>
  );
};


export default BlogContextProvider;
