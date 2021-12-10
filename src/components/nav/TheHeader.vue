<template>
   <nav>
      <ul>
         <li>
            <router-link to="/">Список валют</router-link>
         </li>
         <li>
            <router-link to="/converter">Конвертер валют</router-link>
         </li>
      </ul>
   </nav>
</template>

<style scoped>
ul {
   list-style: none;
   display: flex; 
   justify-content: center;
}
li {
   background: rgb(204, 204, 204);
   text-align: center;
}

li:hover {   
   box-shadow: 0px 5px 10px 2px rgba(22, 93, 148, 0.45);
   font-weight: 700;
}
li:first-child {
   margin: 0;
}
li:last-child {
   margin-left: 20px;
}
a {
   text-transform: uppercase;
   display: block;
   cursor: pointer;
   border: 1px solid #333;
   padding: 10px; 
   text-decoration: none;     
   color: #333;
}
.router-link-active {
   color: #101D94;
   border: 1px solid #101D94;
   background-color: #fff;   
}
</style>

