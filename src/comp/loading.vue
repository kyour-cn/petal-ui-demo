<template>
    <div class="loading">
        <view class="circle">
            <view class="doll wander-h"></view>
        </view>
    </div>
</template>

<script>
export default {
    name: 'Loading',
};
</script>

<style scoped>

.loading {
    width: 200rpx;
    height: 200rpx;
    border: 2px solid #ccc;

    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 4px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}

.doll{
    width: 15rpx;
    height: 15rpx;
    border-radius: 50%;
    background: #444;
}

@keyframes ld-wander-h {
    0% {
        animation-timing-function: cubic-bezier(0.9647, 0.2413, -0.0705, 0.7911);
        transform: translate(-650%, 200%)
    }
    51% {
        animation-timing-function: cubic-bezier(0.9226, 0.2631, -0.0308, 0.7628);
        transform: translate(650%, -200%)
    }
    100% {
        transform: translate(-650%, 200%)
    }
}

.wander-h{
    animation: ld-wander-h 1s infinite linear
}

</style>
