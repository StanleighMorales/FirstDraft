<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const showPassword = ref(false);
const register = ref(false);

const switchAuth = () => {
  register.value = !register.value;
}
</script>
<template>
  <div class="stars"></div>
  <div class="twinkling"></div>

  <Transition name="card-fade" mode="out-in">
    <div class="flex w-full items-center justify-center" v-if="!register">
      <Card class="color-stone-50 w-lg p-8 shadow-lg">
        <CardHeader class="flex justify-center content-center">
          <CardAction>
            <CardTitle class="place-self-center">
              <p class="text-lg">Welcome Back</p>
            </CardTitle>
            <CardDescription>Please sign in to your account</CardDescription>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div class="flex flex-col gap-4">
              <div class="relative mt-2">
                <Input id="email" type="email" placeholder=" "
                  class="peer h-10 w-full placeholder-transparent focus:outline-none" required />
                <Label for="email"
                  class="absolute left-3 -top-2.5 bg-stone-50 px-1 text-xs text-stone-500 transition-all
                                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent
                                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-sky-600 peer-focus:bg-stone-50">
                  Email
                </Label>
              </div>
              <div class="relative mt-2">
                <Input id="password" :type="showPassword ? 'text' : 'password'" placeholder=" "
                  class="peer h-10 w-full placeholder-transparent focus:outline-none" required />
                <Label for="password"
                  class="absolute left-3 -top-2.5 bg-stone-50 px-1 text-xs text-stone-500 transition-all
                                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent
                                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-sky-600 peer-focus:bg-stone-50">
                  Password
                </Label>
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-500 hover:text-stone-700 cursor-pointer">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </button>
              </div>

            </div>
            <div class="flex justify-between items-center pt-2">
              <div class="flex items-center gap-2">
                <input type="checkbox" class="cursor-pointer" />
                <p>Remember me</p>
              </div>

              <a href="#" class="place-self-end text-sm color-stone-500 hover:underline mt-4">
                Forgot your password?
              </a>

            </div>

          </form>
        </CardContent>
        <CardFooter class="flex-auto flex-col gap-4">
          <Button type="submit" class="w-full mb-2 cursor-pointer">
            Sign In
          </Button>
          <div class="relative flex items-center w-full">
            <span class="flex-grow h-px bg-stone-200"></span>
            <span class="flex-shrink text-xs text-stone-500 px-4 uppercase">
              <p>Or</p>
            </span>
            <span class="flex-grow h-px bg-stone-200"></span>
          </div>
          <Button variant="outline" class="cursor-pointer">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M533.5 278.4c0-17.4-1.5-34.1-4.2-50.4H272v95.5h147.1c-6.4 34.7-25.9 64.1-55.1 83.8v69.7h88.9c52.2-48 82.6-119 82.6-198.6z"
                fill="#4285F4" />
              <path
                d="M272 544.3c74.4 0 136.9-24.6 182.6-66.8l-88.9-69.7c-24.7 16.6-56.3 26.5-93.7 26.5-71.9 0-132.8-48.6-154.7-114.1H27.4v71.9c45.2 89 137.8 152.2 244.6 152.2z"
                fill="#34A853" />
              <path d="M117.3 324.2c-10.4-30.7-10.4-63.9 0-94.6V157.7H27.4c-39.6 77-39.6 169.3 0 246.3l89.9-79.8z"
                fill="#FBBC05" />
              <path
                d="M272 107c39.5-.6 77.6 14 106.6 40.5l80-80C408 24 344.4-.3 272 0 165.2 0 72.6 63.2 27.4 152l89.9 71c21-65.5 82.9-114 154.7-116z"
                fill="#EA4335" />
            </svg>
            Sign In with Google

          </Button>
          <p>Don't have an account? <button @click="switchAuth" class="text-sky-800 cursor-pointer"> Create an
              account</button></p>
        </CardFooter>
      </Card>
    </div>
    <div id="register-card" v-else="register">
      <Card class="color-stone-50 w-lg p-8 shadow-lg">
        <CardHeader>
          <CardTitle class="font-bold place-self-center">Welcome</CardTitle>
          <CardDescription class="place-self-center">Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="flex flex-col gap-4">
              <div class="relative mt-2">
                <Input id="email" type="email" placeholder=" "
                  class="peer h-10 w-full placeholder-transparent focus:outline-none" required />
                <Label for="email"
                  class="absolute left-3 -top-2.5 bg-stone-50 px-1 text-xs text-stone-500 transition-all
                                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent
                                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-sky-600 peer-focus:bg-stone-50">
                  Email
                </Label>
              </div>
              <div class="relative mt-2">
                <Input id="password" :type="showPassword ? 'text' : 'password'" placeholder=" "
                  class="peer h-10 w-full placeholder-transparent focus:outline-none" required />
                <Label for="password"
                  class="absolute left-3 -top-2.5 bg-stone-50 px-1 text-xs text-stone-500 transition-all
                                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent
                                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-sky-600 peer-focus:bg-stone-50">
                  Password
                </Label>
                <button type="button" @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-stone-500 hover:text-stone-700 cursor-pointer">
                  <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                </button>
              </div>
              <div class="relative mt-2">
                <Input id="password" :type="showPassword ? 'text' : 'password'" placeholder=" "
                  class="peer h-10 w-full placeholder-transparent focus:outline-none" required />
                <Label for="password"
                  class="absolute left-3 -top-2.5 bg-stone-50 px-1 text-xs text-stone-500 transition-all
                                  peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent
                                  peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-sky-600 peer-focus:bg-stone-50">
                  Confirm Password
                </Label>
              </div>

            </div>
          </form>
        </CardContent>
        <CardFooter class="flex-auto flex-col gap-4">
          <Button type="submit" class="w-full">Sign Up</Button>
          <div class="relative flex items-center w-full">
            <span class="flex-grow h-px bg-stone-200"></span>
            <span class="flex-shrink text-xs text-stone-500 px-4 uppercase">
              <p>Or</p>
            </span>
            <span class="flex-grow h-px bg-stone-200"></span>
          </div>
          <Button variant="outline" class="cursor-pointer">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M533.5 278.4c0-17.4-1.5-34.1-4.2-50.4H272v95.5h147.1c-6.4 34.7-25.9 64.1-55.1 83.8v69.7h88.9c52.2-48 82.6-119 82.6-198.6z"
                fill="#4285F4" />
              <path
                d="M272 544.3c74.4 0 136.9-24.6 182.6-66.8l-88.9-69.7c-24.7 16.6-56.3 26.5-93.7 26.5-71.9 0-132.8-48.6-154.7-114.1H27.4v71.9c45.2 89 137.8 152.2 244.6 152.2z"
                fill="#34A853" />
              <path d="M117.3 324.2c-10.4-30.7-10.4-63.9 0-94.6V157.7H27.4c-39.6 77-39.6 169.3 0 246.3l89.9-79.8z"
                fill="#FBBC05" />
              <path
                d="M272 107c39.5-.6 77.6 14 106.6 40.5l80-80C408 24 344.4-.3 272 0 165.2 0 72.6 63.2 27.4 152l89.9 71c21-65.5 82.9-114 154.7-116z"
                fill="#EA4335" />
            </svg>
            Sign Up with Google

          </Button>
          <p>Already have an account? <button @click="switchAuth" class="text-sky-800 cursor-pointer">Sign In</button>
          </p>
        </CardFooter>
      </Card>
    </div>

  </Transition>

</template>

<style scoped>
/* Base background color */
:global(body) {
  background-color: #050505;
}

.stars,
.twinkling {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.stars {
  z-index: -2;
  background-image:
    radial-gradient(2px 2px at 20px 30px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: move-slow 100s linear infinite;
}

.twinkling {
  z-index: -1;
  background-image:
    radial-gradient(2px 2px at 100px 150px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 20px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 180px 90px, #eee, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 300px 300px;
  /* Different size for parallax */
  animation: move-fast 50s linear infinite, flash 5s ease-in-out infinite;
  opacity: 0.7;
}

/* Animates the background position to create movement */
@keyframes move-slow {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 2000px 2000px;
  }
}

@keyframes move-fast {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -2000px 2000px;
  }
}

/* Optional flashing for the second layer */
@keyframes flash {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.8;
  }
}
</style>