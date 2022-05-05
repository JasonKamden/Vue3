import {onBeforeMount, onMounted, reactive} from "vue";
function savePoint() {
    let point = reactive({
        x: 0,
        y: 0,
    })

    function savePoint(event) {
        console.log(event.pageX, event.pageY);
        point.x = event.pageX;
        point.y = event.pageY;
    }

    onMounted(() => {
        window.addEventListener("click", savePoint);
    });

    onBeforeMount(() => {
        window.removeEventListener("click", savePoint);
    });
    return point;
}

export default savePoint;