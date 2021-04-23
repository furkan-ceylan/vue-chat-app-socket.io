<template>
  <div class="user-chat w-100 overflow-hidden user-chat-show">
    <div class="d-lg-flex">
      <!-- start chat conversation section -->
      <div class="w-100 overflow-hidden position-relative">
        <div class="p-3 p-lg-4 border-bottom">
          <div class="row align-items-center">
            <div class="col-sm-4 col-8">
              <div class="d-flex align-items-center">
                <div class="d-block d-lg-none me-2 ms-0">
                  <a
                    href="javascript: void(0);"
                    class="user-chat-remove text-muted font-size-16 p-2"
                    ><i class="ri-arrow-left-s-line"></i
                  ></a>
                </div>
                <div class="flex-1 overflow-hidden">
                  <h5 class="font-size-16 mb-0 text-truncate">
                    <a href="#" class="text-reset user-profile-show"
                      >Chat Room</a
                    >
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-sm-8 col-4">
              <ul class="list-inline user-chat-nav text-end mb-0">
                <li class="list-inline-item">
                  <div class="dropdown">
                    <button
                      class="btn nav-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ri-search-line"></i>
                    </button>
                    <div
                      class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md"
                    >
                      <div class="search-box p-2">
                        <input
                          type="text"
                          class="form-control bg-light border-0"
                          placeholder="Search.."
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end chat user head -->

        <!-- start chat conversation -->
        <div
          class="chat-conversation p-3 p-lg-4"
          data-simplebar="init"
          v-chat-scroll="{ smooth: true, notSmoothOnInit: true }"
        >
          <ul class="list-unstyled mb-0">
            <li class="right" v-bind:key="message" v-for="message in messages">
              <div class="conversation-list">
                <div class="chat-avatar">
                  <img src="assets/images/users/avataricon.jpg" alt="" />
                </div>
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0 font-size-20">
                        {{ message.message }}
                      </p>
                    </div>
                  </div>
                  <div class="conversation-name font-size-17">
                    {{ message.name }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- end chat conversation end -->

        <!-- start chat input section -->
        <div class="chat-input-section p-3 p-lg-4 border-top mb-0">
          <div class="row g-0">
            <div class="col">
              <input
                v-model="message"
                type="text"
                class="form-control form-control-lg bg-light border-light"
                placeholder="Enter Message..."
              />
            </div>
            <div class="col-auto">
              <div class="chat-input-links ms-md-2 me-md-0">
                <ul class="list-inline mb-0">
                  <li
                    class="list-inline-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Emoji"
                  >
                    <button
                      type="button"
                      class="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                    >
                      <i class="ri-emotion-happy-line"></i>
                    </button>
                  </li>
                  <li class="list-inline-item">
                    <button
                      @click="sendMessage()"
                      class="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                    >
                      <i class="ri-send-plane-2-fill"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- end chat input section -->
      </div>
      <!-- end chat conversation section -->
    </div>
    <!-- End User chat -->
  </div>
</template>

<script>
export default {
  name: "UserChat",
  props: ["userName"],

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
    messages(data) {
      this.messages = data;
    },
  },
  methods: {
    sendMessage() {
      if (this.message != "") {
        this.$socket.emit("new_message", {
          name: this.userName,
          message: this.message,
        });
        this.message = "";
      }
    },
  },
};
</script>

<style></style>
