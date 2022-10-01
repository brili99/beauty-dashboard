<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Test router</a>
      <ul class="navbar-nav">
        <li>
          <router-link to="/" class="m-1">Home</router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="m-1">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/login" class="m-1">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>