import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import mobile from "@/views/mobile/index";
import change from "@/views/change/index";
import fault from "@/views/fault/index";
import addfault from "@/views/fault/addfault";
import catfault from "@/views/fault/catfault";

const routes = [{
		path: "/",
		name: "home",
	},
	{
		path: "/mobile",
		name: "mobile",
		component: mobile
	},
	{
		path: "/change",
		name: "change",
		component: change
	},
	{
		path: "/fault",
		name: "fault",
		component: fault
	},
	{
		path: "/addfault",
		name: "addfault",
		component: addfault
	},
	{
		path: "/cat",
		name: "catfault",
		component: catfault
	},
	
];

const router = new VueRouter({
	routes
});

export default router;
