import React,{useEffect} from "react";
import "./Dashboard.css";

export default ()=>{
    useEffect(()=>{
        document.getElementById("menu-toggle").addEventListener("click", function(e) {
            e.preventDefault();
            var wrapper = document.getElementById("wrapper");
            if (wrapper.classList.contains("toggled")) {
              wrapper.classList.remove("toggled");
            } else {
              wrapper.classList.add("toggled");
            }
         });
    },[]);
   return (
   <div id="wrapper">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">click me</button>
      <div id="sidebar-wrapper">
         <ul class="sidebar-nav nav-pills nav-stacked" id="menu">
            <li class="">
               <a href="#">Dashboard</a>
            </li>
            <li>
               <a href="#">LeaderBoard</a>
            </li>
            <li>
               <a href="#">Help</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
            <li>
               <a href="#">Profile</a>
            </li>
            <li>
               <a href="#">Log Out</a>
            </li>
         </ul>
      </div>
      <div id="page-content-wrapper">
         <div class="container-fluid xyz">
            <div class="row">
               <div class="col-lg-12">
                  <h1>title</h1>
                  <p>body</p>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
}