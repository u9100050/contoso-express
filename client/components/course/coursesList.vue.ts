import {loadCourses, deleteCourse, loadCourse} from '../../vuex/actions';
const courseRow = require('./courseRow.vue');
const simpleConfirm = require('./../elements/simpleConfirm.vue');
const courseDetails = require('./courseDetails.vue');

export default {
    components: {courseRow, simpleConfirm, courseDetails},
    data () {
        return {
            showConfirm: false,
            confirmAction: null,
            showDetailsModal: false
        };
    },
    vuex: {
        getters: {
            courses: ({courses}) => courses.list,
            course: ({courses}) => courses.course
        },
        actions: {
            loadCourses,
            deleteCourse,
            loadCourse
        }
    },
    created() {
        this.loadCourses();
    },
    methods: {
        deleteCourseAction(courseId) {
            this.showConfirm = true;

            this.confirmAction = () => {
                this.deleteCourse(courseId);
            };
        },
        courseDetailsAction(courseId) {
            this.loadCourse(courseId);
            this.showDetailsModal = true;
        }
    }
};