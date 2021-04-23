<template>
  <!-- start chat-leftsidebar -->
  <div class="chat-leftsidebar me-lg-1 ms-lg-0">
    <div class="tab-content">
      <!-- Start chats tab-pane -->
      <div
        class="tab-pane fade show active"
        id="pills-chat"
        role="tabpanel"
        aria-labelledby="pills-chat-tab"
      >
        <!-- Start chats content -->
        <div>
          <div class="px-4 pt-4">
            <h4 class="mb-4">Active Users</h4>
            <div class="search-box chat-search-box">
              <div class="input-group mb-3 rounded-3">
                <span
                  class="input-group-text text-muted bg-light pe-1 ps-3"
                  id="basic-addon1"
                >
                  <i class="ri-search-line search-icon font-size-18"></i>
                </span>
                <input
                  type="text"
                  class="form-control bg-light"
                  placeholder="Search users"
                  aria-label="Search users"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <!-- Search Box-->
          </div>
          <!-- .p-4 -->

          <!-- Start chat-message-list -->
          <div class="px-2">
            <div class="chat-message-list" data-simplebar>
              <ul class="list-unstyled">
                <li v-bind:key="user.id" v-for="user in users">
                  <div class="d-flex">
                    <div
                      class="chat-user-img online align-self-center me-3 ms-0"
                    >
                      <img
                        src="assets/images/users/avataricon2.png"
                        class="rounded-circle avatar-xs"
                        alt=""
                      />
                      <span class="user-status"></span>
                    </div>

                    <div class="flex-1 overflow-hidden">
                      <h5 class="text-truncate font-size-17 mb-1">
                        {{ user.name }}
                      </h5>
                      <p class="chat-user-message text-truncate mb-0">
                        Hey! there I'm available
                      </p>
                    </div>
                    <div class="font-size-11">Active</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- End chat-message-list -->
        </div>
        <!-- Start chats content -->
      </div>
      <!-- End chats tab-pane -->
    </div>
    <!-- end tab content -->
  </div>
</template>

<script>
export default {
  name: "TabContent",

  data() {
    return {
      login: false,
      name: "",
      users: [],
      message: "",
      messages: [],
    };
  },
  sockets: {
    users(data) {
      this.users = data;
    },
  },
};
</script>

<style></style>
