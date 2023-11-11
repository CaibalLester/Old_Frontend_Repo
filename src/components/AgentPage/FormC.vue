<template>
    <section id="myform" class="myform d-flex align-items-center">

        
<div class="card">
    <div class="custom-container">
        <form @submit.prevent="save">
            <fieldset>
                <h1>Enrollment Form</h1>
                <div class="form-group">
                    <label for="position">Position applying for:</label>
                    <input type="text" v-model="position" name="position" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="preferredArea">Preferred area:</label>
                    <input type="text" v-model="preferredArea" name="preferredArea" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Source:</label>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="referral" name="source" value="Referral" class="form-check-input">
                        <label for="referral" class="form-check-label">Referral</label>
                    </div>
                    <input type="text" v-model="referralBy" name="referralBy" class="form-control" placeholder="Referral By">

                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="onlineAd" name="source" value="Online Advertisement"
                            class="form-check-input">
                        <label for="onlineAd" class="form-check-label">Online Advertisement</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="walkIn" name="source" value="Walk-In" class="form-check-input">
                        <label for="walkIn" class="form-check-label">Walk-In</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="othersRef" name="source" value="Others Referal"
                            class="form-check-input">
                        <label for="others" class="form-check-label">Others</label>
                    </div>
                </div>
                <div class="form-group">
                    <h2>Personal information</h2>
                    <label for="name">Name:</label>
                    <input type="text" v-model="fname" name="fullname" class="form-control"
                        placeholder="Last Name First Name Middle Name Sufix">

                    <label for="nickname">Nickname:</label>
                    <input type="text" v-model="nickname" name="nickname" class="form-control" placeholder="Nickname">

                    <label for="birthdate">Birth date:</label>
                    <input type="date" v-model="birthdate" name="birthdate" class="form-control">

                    <label for="placeOfBirth">Place of birth:</label>
                    <input type="text" v-model="placeOfBirth" name="placeOfBirth" class="form-control">

                    <label for="gender">Gender:</label>
                    <input type="text" v-model="gender" name="gender" class="form-control" placeholder="Male or Female">

                    <label for="bloodType">Blood Type:</label>
                    <input type="text" v-model="bloodType" name="bloodType" class="form-control" placeholder="Blood type">

                    <label for="homeAddress">Home address:</label>
                    <input type="text" v-model="homeAddress" name="homeAddress" class="form-control"
                        placeholder=" No. Street Subdivision/Barangay City/Municipal/Province">

                    <label for="mobileNo">Mobile Number:</label>
                    <input type="text" v-model="mobileNo" name="mobileNo" class="form-control" placeholder="Mobile Number">

                    <label for="landline">Landline:</label>
                    <input type="text" v-model="landline" name="landline" class="form-control" placeholder="Landline">

                    <label for="email">Email Address:</label>
                    <input type="email" v-model="email" name="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="citizenship">Citizenship:</label><br>
                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="citizenship" name="citizenship" value="citizenship"
                            class="form-check-input">
                        <label for="filipino" class="form-check-label">Filipino</label>
                    </div>
                    <input type="text" v-model="otherscitizenship" name="others" class="form-control"
                        placeholder="If Other Please Please Include Here">

                    <label for="naturalizationInfo">If naturalized citizen of the Philippines, give date and place of
                        naturalization and attached photocopy of certificate of naturalization:</label>
                    <input type="text" v-model="naturalizationInfo" name="naturalizationInfo" class="form-control">

                    <label for="maritalStatus">Marital Status:</label>
                    <input type="text" v-model="maritalStatus" name="maritalStatus" class="form-control">

                    <div id="ifMarried">
                        <label for="maidenName">If Married, a) Maiden Name</label>
                        <input type="text" v-model="maidenName" name="maidenName" class="form-control">

                        <label for="spouseName">b) Name of Spouse:</label>
                        <input type="text" v-model="spouseName" name="spouseName" class="form-control">
                    </div>

                    <label for="sssNo">SSS No.:</label>
                    <input type="text" v-model="sssNo" name="sssNo" class="form-control">

                    <label for="tin">Tax Identification No.:</label>
                    <input type="text" v-model="tin" name="tin" class="form-control">
                </div>
                <input type="submit" value="Submit" class="btn btn-primary">
            </fieldset>
        </form>
    </div>
    </div>
    </section>
</template>
<style>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            position: "Agent",
            preferredArea: "",
            referral: "",
            referralBy: "",
            onlineAd: "",
            walkIn: "",
            othersRef: "",
            fname: "",
            nickname: "",
            birthdate: "",
            placeOfBirth: "",
            gender: "",
            bloodType: "",
            homeAddress: "",
            mobileNo: "",
            landline: "",
            email: "",
            citizenship: "",
            othersCitizenship: "",
            naturalizationInfo: "",
            maritalStatus: "",
            maidenName: "",
            spouseName: "",
            sssNo: "",
            tin: ""
        }
    },

    methods: {
        async save() {
            try {
                const ins = await axios.post('save', {
                    position: this.position || "N/A",
                    preferredArea: this.preferredArea || "N/A",
                    referral: this.referral || "N/A",
                    referralBy: this.referralBy || "N/A",
                    onlineAd: this.onlineAd || "N/A",
                    walkIn: this.walkIn || "N/A",
                    othersRef: this.othersRef || "N/A",
                    fname: this.fname || "N/A",
                    nickname: this.nickname || "N/A",
                    birthdate: this.birthdate || "N/A",
                    placeOfBirth: this.placeOfBirth || "N/A",
                    gender: this.gender || "N/A",
                    bloodType: this.bloodType || "N/A",
                    homeAddress: this.homeAddress || "N/A",
                    mobileNo: this.mobileNo || "N/A",
                    landline: this.landline || "N/A",
                    email: this.email || "N/A",
                    citizenship: this.citizenship || "N/A",
                    othersCitizenship: this.othersCitizenship || "N/A",
                    naturalizationInfo: this.naturalizationInfo || "N/A",
                    maritalStatus: this.maritalStatus || "N/A",
                    maidenName: this.maidenName || "N/A",
                    spouseName: this.spouseName || "N/A",
                    sssNo: this.sssNo || "N/A",
                    tin: this.tin || "N/A",
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>


