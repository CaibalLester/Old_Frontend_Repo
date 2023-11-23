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
                            </div>
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



                                <label for="birthdate">Birth<br> a) Date:</label>
                                <input type="date" v-model="birthdate" name="birthdate" class="form-control">
                                <label for="place">b) Place:</label>
                                <input type="text" v-model="place" name="place" class="form-control" placeholder="place">
                                <br>

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

                                    <div class="form-group">
                                        <label for="gender">Gender:</label>
                                            <select v-model="gender" name="gender" class="form-control" required>
                                                <option value="" disabled>Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                    </div>

                                    <label for="maritalStatus">Civil Status:</label>
                                        <select v-model="maritalStatus" name="maritalStatus" class="form-control">
                                            <option value="" disabled>Select Civil Status</option>
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                        </select><br>


                    <div id="ifMarried">
                        <label for="maidenName">If Married, a) Maiden Name</label>
                        <input type="text" v-model="maidenName" name="maidenName" class="form-control">

                        <label for="spouseName">b) Name of Spouse:</label>
                        <input type="text" v-model="spouseName" name="spouseName" class="form-control">
                    </div>

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

    <!--PAGE 2-->
    <section id="myform" class="myform d-flex align-items-center">
        <div class="card">
            <div class="custom-container">
                <form @submit.prevent="save">
                    <fieldset>
                        <h5>Application for Insurance Agent’s License<br>Insurance Commission</h5>
                        <div class="form-group">
                            <br>
                            <p>
                                8. If applicant is a foreigner, give serial number, date and place of issue of alien certificate of registration
                                (ACR) and the immigrant certificate of residence (ICR) for the current year and attach 
                                photocopy of each thereof <input type="text" v-model="fname" name="attach" class="form-control"
                                    placeholder="N/A">
                            </p>
                            <p>
                                9. If applicant is a partnership, association or corporation:
                            </p>
                            
                            <label for="certificate"><br> a) Attach a certified true copy of the certificate of registration, articles of partnership, 
                                                                association or incorporation and by-laws:</label>
                                                                <input type="text" v-model="fname" name="certificate" class="form-control" placeholder="N/A">
                                <label for="state">b) State percentage of Filipino participation in the partnership, association or corporation:</label>
                                <input type="text" v-model="fname" name="state" class="form-control" placeholder="N/A"><br>

                                <p>
                                    10. Any license previously granted to act as insurance/general agent in this country? State name of 
                                        insurance company represented.<br>
                                        <label for="state">Company:</label>
                                <input type="text" v-model="company" name="company" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="company" name="company" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="company" name="company" class="form-control" placeholder="N/A"><br>
                                <label for="state">License Type:</label>
                                <input type="text" v-model="licenseType" name="licenseType" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="licenseType" name="licenseType" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="licenseType" name="licenseType" class="form-control" placeholder="N/A"><br>
                                <label for="state">License Type:</label>
                                <input type="text" v-model="licenseNo" name="licenseNo" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="licenseNo" name="licenseNo" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="licenseNo" name="licenseNo" class="form-control" placeholder="N/A"><br>
                                </p>
                                

                                <p>
                                    11. Have your filed your income tax return for the preceding year?
                                    <input type="text" v-model="tax" name="tax" class="form-control" placeholder="NO">
                                    If not give reason.<input type="text" v-model="reason" name="reason" class="form-control" placeholder="PANDEMIC">
                                </p>

                                <p>
                                    12. in the blanks below, state your last (2) employers.<br>
                                        <label for="state">Name of Employer:</label>
                                <input type="text" v-model="nameOfEmployer" name="nameOfEmployer" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="nameOfEmployer" name="nameOfEmployer" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="nameOfEmployer" name="nameOfEmployer" class="form-control" placeholder="N/A"><br>
                                <label for="state">Position:</label>
                                <input type="text" v-model="position" name="position" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="position" name="position" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="position" name="position" class="form-control" placeholder="N/A"><br>
                                <label for="state">Inclusive Dates:</label>
                                <input type="text" v-model="inclusiveDates" name="inclusiveDates" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="inclusiveDates" name="inclusiveDates" class="form-control" placeholder="N/A"><br>
                                <input type="text" v-model="inclusiveDates" name="inclusiveDates" class="form-control" placeholder="N/A"><br>
                                </p>
                                
                                <p>
                                   13. Are you an official or an employee of an insurance company or broker?
                                    <input type="text" v-model="official" name="official" class="form-control" placeholder="NO"><br>
                                    If yes, give the position held:
                                    <input type="text" v-model="held" name="held" class="form-control" placeholder="N/A"><br>
                                </p>

                                <p>
                                    14. Are you a government employee?
                                    <input type="text" v-model="government" name="government" class="form-control" placeholder="N/A">;<br>
                                    if yes, attach the necessary clearance/permission from 
                                    the Head of the Department or Agency in accordance with Section 18, of Memorandum Circular No.
                                    15, series of 1999 of the Civil Service Commission.
                                </p>
                                <p>
                                    Executed this <input type="number" min="1" max="31"> day of <select id='gMonth2' onchange="show_month()">
                                                                                            <option value=''>--Select Month--</option>
                                                                                            <option selected value='1'>Janaury</option>
                                                                                            <option value='2'>February</option>
                                                                                            <option value='3'>March</option>
                                                                                            <option value='4'>April</option>
                                                                                            <option value='5'>May</option>
                                                                                            <option value='6'>June</option>
                                                                                            <option value='7'>July</option>
                                                                                            <option value='8'>August</option>
                                                                                            <option value='9'>September</option>
                                                                                            <option value='10'>October</option>
                                                                                            <option value='11'>November</option>
                                                                                            <option value='12'>December</option>
                                                                                            </select>
                                 20 <input type="number" min="23" max="30"> at <input type="text" v-model="address" name="address" class="form-control" placeholder="">, Philippines.
                                </p>

                                Applicant <input type="text" v-model="signature" name="signature" class="form-control" placeholder="">
                        </div>
                        <input type="submit" value="Submit" class="btn btn-primary">
                    </fieldset>
                </form>
            </div>
        </div>
    </section>

    <!-- PAGE 3 -->
    <section id="myform" class="myform d-flex align-items-center">
        <div class="card">
            <div class="custom-container">
                <form @submit.prevent="save">
                    <fieldset>
                        <h5>Application for Insurance Agent’s License<br>
                            Insurance Commission</h5><br><br>
                            <h3><b>AFFIDAVIT OF VERIFICATION</b></h3>
                        <div class="form-group">
                            <br>
                            <p>
                                Republic of the Philippines)<br>
                                Province/City of  <input type="text" v-model="city" name="city" class="form-control"
                                    placeholder="">) S.S.<br>
                            </p>
                            <p>
                                I, <input type="text" v-model="i" name="i" class="form-control"  placeholder="">, being duly sworn, depose and say that I am the 
                                person named in and who signed the foregoing application; that I know the contents thereof and the 
                                statements made and answers to question therein are true.
                            </p>
                            Affiant <input type="text" v-model="affiant" name="affiant" class="form-control" placeholder="">

                            <label for="license">TIN:</label>
                            <input type="text" v-model="tin" name="tin" class="form-control">
                            <label for="Or">SSS No.:</label>
                            <input type="text" v-model="sss" name="sss" class="form-control">

                            <p>
                                SUBSCRIBED AND SWORN TO before me this <input type="number" min="1" max="31"> day of <select id='gMonth2' onchange="show_month()">
                                                                                            <option value=''>--Select Month--</option>
                                                                                            <option selected value='1'>Janaury</option>
                                                                                            <option value='2'>February</option>
                                                                                            <option value='3'>March</option>
                                                                                            <option value='4'>April</option>
                                                                                            <option value='5'>May</option>
                                                                                            <option value='6'>June</option>
                                                                                            <option value='7'>July</option>
                                                                                            <option value='8'>August</option>
                                                                                            <option value='9'>September</option>
                                                                                            <option value='10'>October</option>
                                                                                            <option value='11'>November</option>
                                                                                            <option value='12'>December</option>
                                                                                            </select>
                                 20 <input type="number" min="23" max="30"> at <input type="text" v-model="address" name="address" class="form-control" placeholder="">, 
                                 Affiant/s exhibited to me his/her TIN/SSS/Passport/Postal/LTO/ <input type="text" v-model="exhibited" name="exhibited" class="form-control">
                                </p>
                            
                            <label for="Ca">Doc No.:</label>
                            <input type="text" v-model="doc" name="doc" class="form-control">
                            <label for="Ca">Page No.:</label>
                            <input type="text" v-model="page" name="page" class="form-control">
                            <label for="Ca">Book No.:</label>
                            <input type="text" v-model="book" name="book" class="form-control"><br>
                            <label for="Ca">Series of 20</label>
                            <input type="number" min="23" max="30">
                        <!--
                            <p>
                                ----------------------------------------------------------------------------------------------------------------------------
                            </p>
                            <br>
                            <p>
                                APPROVED AND COUNTERSIGNED for
                                <b>Allianz PNB Life Insurance, Inc.</b>
                                for the solicitation or procurement of application for life/variable/non-life insurance
                            </p>

                            Authorized Representative of the Company <input type="text" v-model="authorized" name="authorized" class="form-control" placeholder="">
                         -->
                        </div>
                        <input type="submit" value="Submit" class="btn btn-primary">
                    </fieldset>
                </form>
            </div>
        </div>
    </section>

        <!--PAGE 4-->
        <section id="myform" class="myform d-flex align-items-center">
        <div class="card">
            <div class="custom-container">
                <form @submit.prevent="save">
                    <fieldset>
                        <h5>Application for Insurance Agent’s License<br>Insurance Commission</h5>
                        <div class="form-group">
                            <br>
                            <p><h3><b>CERTIFICATE OF WAVER </b></h3></p>
                            <p>
                                WE HEREBY CERTIFY:<br><br>

                                That we know the applicant <input type="text" v-model="fname" name="certificate" class="form-control" placeholder="">, that a thorough 
                                investigation has been made into his/her character, conduct and fitness; he/she is of good moral 
                                character and worthy of a Certificate of Authority, and that he/she has had experience in each of the 
                                kinds of insurance he/she proposes to write or solicit under the Certificate of Authority applied for.<br><br>
                                That we have communicated with the former and present employees of the applicant and the 
                                replies have been satisfactory.<br><br>
                                That to the best of our knowledge, information and belief, all statements and answer contained 
                                in the application have been in the handwriting of the applicant with respect to the questions applicable 
                                to him/her.<br><br>
                                If and when the agency is terminated, written notice thereof will be given forthwith to the
                                Insurance Commission together with the reason therefore.<br><br>
                                In consideration of the Certificate of Authority to be issued to the above-mentioned applicant, 
                                under the provision of Section 299 of the Insurance Code, we hereby waive, on behalf of -<br><br><br>
                                <b>ALLIANZ PNB LIFE INSURANCE, INC.</b><br>
                                (Company Name)<br><br>
                                the right to appeal to the Secretary of Finance in case of revocation by the Insurance Commissioner of 
                                the certificate to be issued in favor of the above-mentioned applicant and agree to cancel at once the 
                                contract of agency between said applicant and the company upon receipt of the notice of revocation.
                                </p>
                                <label for="exdcuted">Executed in </label>
                                <input type="text" v-model="executed" name="executed" class="form-control">
                                <label for="on">on</label>
                                <input type="date" v-model="on" name="on" class="form-control">
                                <br>

                            <p><h5>
                                TIN 204-145-589-000<br>
                                By <input type="text" v-model="by" name="by" class="form-control">
                                <br>Authorized Representative of the Company<br><br>
                            </h5></p>

                            <p>
                                N.B. No person, partnership, association or corporation required by Law to file an income tax return shall be 
                                issued a license to engage in any trade, business or occupation o practice a profession unless he shall have 
                                presented to the officer issuing such license or permit proof that he has filed his income tax return during the 
                                preceding year and that income taxes due have been paid thereon. For the purpose of this Act, a copy of such 
                                income tax return on which is shown a certification or statement by the Collector of Internal Revenue or his duty 
                                authorized representative that the aforesaid income tax return, and the corresponding receipts showing payment 
                                of all income taxes due thereon, shall be sufficient proof.<br><br>
                                Any person, partnership, association or corporation who obtains a license mentioned in the preceding paragraph 
                                without presenting the aforementioned certification of the Collector of Internal Revenue or his duly authorized 
                                representative, under the pretext that he or it is not required by law to file an income tax return when in truth he or 
                                it is so required, or under any other misrepresentation, shall be liable to fine of not more than Five Hundred 
                                Pesos, or imprisonment of not more than one year or both, in the discretion of the Court. In case of partnership, 
                                association, the manager or the equivalent officer thereof shall be held responsible and in addition, the license 
                                shall be revoked. (Section 1, Republic Act No. 1538)<br><br>
                                IC-LLI-DP-002-F-01<br>
                                Rev. 1
                            </p>
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


