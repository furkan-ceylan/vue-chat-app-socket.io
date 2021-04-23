<template>
  <div class="side-menu flex-lg-column me-lg-1 ms-lg-0">
    <!-- LOGO -->
    <!-- end navbar-brand-box -->

    <!-- Start side-menu nav -->
    <div class="flex-lg-column my-auto">
      <ul
        class="nav nav-pills side-menu-nav justify-content-center list-unstyled chat-list chat-user-list"
        role="tablist"
      >
        <li
          class="nav-item chat-list"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-placement="top"
          title="Active Users"
        >
          <a
            class="nav-link active"
            id="pills-chat-tab"
            data-bs-toggle="pill"
            href="#"
            role="tab"
          >
            <i class="ri-message-3-line"></i>
          </a>
        </li>
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-placement="top"
          title="Active Users"
        >
          <a
            class="nav-link active"
            id="pills-user-tab"
            data-bs-toggle="pill"
            href="#pills-user"
            role="tab"
          >
            <i class="ri-group-line"></i>
          </a>
        </li>
      </ul>
    </div>
    <!-- end side-menu nav -->
    <!-- Side menu user -->
  </div>
</template>

<script>
export default {
  name: "leftSideBar",
};
</script>

<style></style>
