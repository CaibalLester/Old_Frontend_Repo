<template>
    <!-- ======= Header ======= -->
    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
                <table>
                    <tr>
                        <td><a class="btn btn-success" href="/Applicant">---Back----</a></td>
                    </tr>
                    <tr>
                        <td><a class="btn btn-danger" href="/">--Logout--</a></td>
                    </tr>
                </table>
            </a>
        </div>
    </header>
    <!-- End Header -->

    <section id="myform" class="myform d-flex align-items-center">
        <div class="card">
            <div class="custom-container">
                <form @submit.prevent="save">
                    <fieldset>
                        <h1>APPLICATION FOR INSURANCE AGENT’S LICENSE</h1>
                        <div class="form-group">
                            <br>
                            <p>
                            <h5>To the Insurance Commissioner:</h5><br>
                            The undersigned hereby applies for a license under the provisions of Chapter IV, Title I of the
                            Insurance Code, to act as insurance/general agent of <b><u>Allianz PNB Life Insurance,
                                    Inc.</u></b>
                            in respect of the kind of insurance indicated herein:
                            </p>
                            <div class="form-section">
                                <div class="form-row">
                                    <div class="checkbox-list">
                                        <label>
                                            <input type="checkbox" v-model="nonlife" name="request" value="none-life">
                                            NONE LIFE
                                        </label>
                                        <br>
                                        <label>
                                            <input type="checkbox" v-model="life" name="request" value="life">
                                            LIFE
                                        </label>
                                        <br>
                                        <label>
                                            <input type="checkbox" v-model="varlife" name="request" value="variable life">
                                            VARIABLE LIFE
                                        </label>
                                        <br>
                                        <label>
                                            <input type="checkbox" v-model="accaAndHealth" name="request"
                                                value="accident and health">
                                            ACCIDENT AND HEALTH
                                        </label>
                                        <br>
                                        <label>
                                            <input type="checkbox" v-model="othercb" name="request" value="labtest">
                                            OTHER PLEASE SPECIFY: <input type="text" v-model="othertb" name="others"
                                                class="form-control" placeholder>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <p>and for that purpose submits the following statements and information required herein.</p>
                            <input type="text" v-model="agencyname" name="others" class="form-control"
                                placeholder="Agency Name if any">
                            <div class="form-group">
                                <label for="applicant name">Name of Applicant:</label>
                                <input type="text" v-model="fname" name="fullname" class="form-control"
                                    placeholder="Last Name || First Name || Middle Name || Sufix">
                                <br>

                                <label for="agentType">Agent Type:</label>
                                <br>
                                <div class="form-row">
                                    <div class="checkbox-list">
                                        <label>
                                            <input type="checkbox" v-model="ordinary" name="request" value="none-life">
                                            Ordinary Agent
                                        </label>
                                        <br>
                                        <label>
                                            <input type="checkbox" v-model="general" name="request" value="life">
                                            General Agent
                                        </label>
                                    </div>
                                </div>

                                <label for="nickname">Home Address:</label>
                                <input type="text" v-model="homeAddress" name="homeaddress" class="form-control"
                                    placeholder="Homeaddress">
                                <label for="nickname">Zip code:</label>
                                <input type="text" v-model="zip" name="zip" class="form-control" placeholder="Zip code">

                                <label for="birthdate">Business Address:</label>
                                <input type="text" v-model="businessAddress" name="businessAddress" class="form-control"
                                    placeholder="Business Address">

                                <label for="gender">T.I.N.:</label>
                                <input type="text" v-model="tin" name="tin" class="form-control" placeholder="T.I.N.">

                                <label for="bloodType">E-mail Address:</label>
                                <input type="text" v-model="emailAddress" name="emailAddress" class="form-control"
                                    placeholder="Email Address">

                                <label for="homeAddress">Mobile Number:</label>
                                <input type="text" v-model="mobileNumber" name="mobileNumber" class="form-control"
                                    placeholder="Mobile Number">
                                <br>



                                <label for="birthdate">Birth<br> a)date:</label>
                                <input type="date" v-model="birthdate" name="birthdate" class="form-control">
                                <label for="palce">b)place:</label>
                                <input type="text" v-model="place" name="place" class="form-control" placeholder="place">

                                <label for="landline">Citizanship:</label>
                                <input type="text" v-model="citizenship" name="citizenship" class="form-control"
                                    placeholder="Citizenship">

                                <label for="email">Sex:</label>
                                <input type="sex" v-model="gender" name="gender" class="form-control" placeholder="Gender">

                                <label for="civilStatus">Civil Status:</label>
                                <input type="civilStatus" v-model="civilStatus" name="civilStatus" class="form-control"
                                    placeholder="Civil Status">
                                <br>

                                <div id="fMarried">
                                    <label for="maidenName">If Married:<br> a) Maiden Name</label>
                                    <input type="text" v-model="maidenName" name="maidenName" class="form-control">

                                    <label for="spouseName">b) Name of Spouse:</label>
                                    <input type="text" v-model="spouseName" name="spouseName" class="form-control">
                                </div>
                                <label for="email">If naturalized citizen of the Philippines, give date and place of
                                    naturalization and attach photocopy
                                    of certificate of naturalization.</label>
                                <input type="naturalized" v-model="naturalize" name="naturalize" class="form-control"
                                    placeholder="N/A">
                                <br>
                            </div>
                            <!-- <p>---------------------------------------------------------------------------------------------------------------------
                            </p>
                            <h5><b><u>FOR IC USE ONLY</u></b></h5>
                            <label for="verify">Verified by:</label>
                            <input type="text" v-model="tin" name="verified" class="form-control">
                            <label for="Date">Date:</label>
                            <input type="date" v-model="date" name="date" class="form-control">
                            <label for="processed">Processed by:</label>
                            <input type="text" v-model="tin" name="processed" class="form-control">
                            <label for="Date">Date:</label>
                            <input type="date" v-model="date" name="date" class="form-control">
                            <label for="approved">Approved by:</label>
                            <input type="text" v-model="tin" name="approved" class="form-control">
                            <label for="Date">Date:</label>
                            <input type="date" v-model="date" name="date" class="form-control">
                            <label for="license">License Fee:</label>
                            <input type="text" v-model="tin" name="license" class="form-control">
                            <label for="Or">OR No.:</label>
                            <input type="text" v-model="tin" name="Or" class="form-control">
                            <label for="Date">Date:</label>
                            <input type="date" v-model="date" name="date" class="form-control">
                            <label for="Ca">CA No.:</label>
                            <input type="text" v-model="tin" name="Ca" class="form-control">
                            <label for="remarks">Remarks:</label>
                            <input type="text" v-model="tin" name="remarks" class="form-control"> -->
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
            nonlife: "",
            life: "",
            varlife: "",
            accaAndHealth: "",
            othercb: "",
            othertb: "",
            agencyname: "",

            
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
            tin: "",
        }
    },

    methods: {
        async save() {
            try {
                const ins = await axios.post('save2', {
                    nonlife: this.nonlife || "N/A",
                    life: this.life || "N/A",
                    varlife: this.varlife || "N/A",
                    accaAndHealth: this.accaAndHealth || "N/A",
                    othercb: this.othercb || "N/A",
                    othertb: this.othertb || "N/A",
                    agencyname: this.agencyname,
                    // position: this.position || "N/A",
                    // preferredArea: this.preferredArea || "N/A",
                    // referral: this.referral || "N/A",
                    // referralBy: this.referralBy || "N/A",
                    // onlineAd: this.onlineAd || "N/A",
                    // walkIn: this.walkIn || "N/A",
                    // othersRef: this.othersRef || "N/A",
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


