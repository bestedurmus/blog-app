import { getDatabase, onValue, push, query, ref, set } from "firebase/database";
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
    console.log("veri eklendi");
  };

  const getBlogs = () => {
   try{
      setisLoading(true);
      const db = getDatabase();
      const userRef = ref(db, "contact");

      onValue(query(userRef), (snapshot) => {
        const cards = snapshot.val();
        const cardsArray = [];
        for (let index in cards) {
          cardsArray.push({ index, ...cards[index] });
        }
        setcardList(cardsArray);
        setisLoading(false)
      });
      return { cardList };
    }catch(err){
        alert(err.message)
    }
  };

  return (
    <BlogContext.Provider value={{ addNewBlog, getBlogs, isLoading, cardList }}>
      {props.children}
    </BlogContext.Provider>
  );
};


export default BlogContextProvider;
