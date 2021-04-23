<template>
  <div id="app">
    <div v-if="!login">
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="text-center mb-4">
                <a href="index.html" class="auth-logo mb-5 d-block">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    height="30"
                    class="logo logo-dark"
                  />
                </a>

                <h4>Sign in</h4>
                <p class="text-muted mb-4">
                  Sign in to continue to Vue Chat App.
                </p>
              </div>

              <div class="card">
                <div class="card-body p-4">
                  <div class="p-3">
                    <form @submit.prevent="enterName()">
                      <div class="mb-3">
                        <label class="form-label">Username</label>
                        <div class="input-group mb-3 bg-soft-dark rounded-3">
                          <span
                            class="input-group-text text-muted"
                            id="basic-addon3"
                          >
                            <i class="ri-user-2-line"></i>
                          </span>
                          <input
                            type="text"
                            class="form-control form-control-lg border-dark bg-soft-light"
                            placeholder="Enter Username"
                            aria-label="Enter Username"
                            aria-describedby="basic-addon3"
                            v-model="name"
                          />
                        </div>
                      </div>

                      <div class="d-grid">
                        <button
                          class="btn btn-primary waves-effect waves-dark"
                          type="submit"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="layout-wrapper d-lg-flex">
        <!-- Start left sidebar-menu -->
        <LeftSideBar />
        <!-- end chat-leftsidebar -->
        <TabContent />
        <!-- Start User chat -->
        <UserChat :user-name="name" />
        <!-- end  layout wrapper -->
      </div>
    </div>
  </div>
</template>

<script>
import LeftSideBar from "./components/leftSideBar.vue";
import TabContent from "./components/TabContent.vue";
import UserChat from "./components/UserChat.vue";

export default {
  name: "App",

  components: {
    LeftSideBar,
    TabContent,
    UserChat,
  },
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
    enterName() {
      this.login = true;
      this.$socket.emit("new_user", this.name);
    },
  },
};
</script>

<style></style>
