<template lang="">
    <div>
        <swiper>
            <swiper-item>
                <img :src="picture" alt='' />
            </swiper-item>
            <swiper-item>
                <img :src="picture" alt='' />
            </swiper-item>
            <swiper-item>
                <img :src="picture" alt='' />
            </swiper-item>
            <swiper-item>
                <img :src="picture" alt='' />
            </swiper-item>
        </swiper>

    </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
    name: "HomeSwiper",
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        picture: {
            type: String,
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="">
    
</style>