<template>
    <main class="d-flex justify-content-center align-items-center h-100">
        <Transition>
            <div class="card" style="width: 20rem;" v-if="showFormLogin">
                <img src="../assets/img/AkNo-logos_transparent.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="form-floating mb-3">
                            <input type="email" v-model="email" name="email" class="form-control" id="floatingInput"
                                placeholder="name@example.com" required>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" v-model="password" name="password" class="form-control"
                                id="floatingPassword" placeholder="Password" required>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary" type="submit" v-html="btnLoginText"></button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </main>
</template>
  
<script>
export default {
    data() {
        return {
            showFormLogin: false,
            email: '',
            password: '',
            btnLoginText: 'Login'
        }
    },
    components: {
    },
    methods: {
        submit() {
            this.setLoadingBtn(true);

            // Change to accessing API login
            setTimeout(() => {
                if (
                    this.email == "brilianeranaomi@gmail.com" &&
                    this.password == "123"
                ) {
                    console.log('Login success');
                    this.setLoadingBtn(false);
                } else {
                    this.$swal({
                        icon: 'error',
                        title: 'Wrong email or password!',
                        showConfirmButton: false,
                        timer: 10000
                    });
                    this.setLoadingBtn(false);
                }
            }, 2000);
        },
        setVisibleFormLogin() {
            this.showFormLogin = !this.showFormLogin;
        },
        setLoadingBtn(isLoading) {
            if (isLoading) {
                this.btnLoginText = `<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>`
            } else {
                this.btnLoginText = 'Login'
            }
        }
    },
    beforeMount() {
        setTimeout(() => {
            this.setVisibleFormLogin();
        }, 500);
    },
}
</script>
  
<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
  