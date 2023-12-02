<template>


   <!-- ======= Header ======= -->
   <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a  class="logo d-flex align-items-center"></a>
  
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
          <nav id="navbar" class="navbar">
            <ul>
              <li> <a  class="logo d-flex align-items-center" href="/Applicant"> <h1 class="d-flex align-items-right">ALLIANZ</h1></a></li>
              <li><a href="/Applicant" >Home</a></li>
              <li><a href="/AboutApplicant">About</a></li>
              <li><a href="/PortfolioApplicant" >Portfolio</a></li>
              <li class="dropdown"><a href="#" class="active"><span>Company Forms</span> <i
                    class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                      <li><a href="/FormA" class="active">Form A</a></li>
                      <li><a href="/FormB">Form B</a></li>
                </ul>
              </li>
              <li><a href="/">Logout</a></li>
            </ul>
          </nav><!-- .navbar -->
  
        </div>
      </header>
      <!-- End Header -->

      <main id="main">
  <!-- ======= Breadcrumbs ======= -->
  <div class="breadcrumbs d-flex align-items-center">
    <div class="container position-relative d-flex flex-column align-items-center">
      <h2>LIFE CHANGER FORM</h2>
    </div>
  </div><!-- End Breadcrumbs -->
    
<section id="myform" class="myform d-flex align-items-center">
    <div class="card">
      <div class="custom-container">
        <form @submit.prevent="save" >
            <fieldset>
                <div class="form-group">
                    <label for="position">Position applying for:</label>
                    <input type="text" v-model="position" name="position" placeholder="Agent" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="preferredArea">Preferred area:</label>
                    <input type="text" v-model="preferredArea" name="preferredArea" class="form-control" required>
                </div>
                <div class="form-group">
                    
                    <div class="form-check form-check-inline">
                        <input type="checkbox" v-model="referral" name="source" value="Referral" class="form-check-input">
                        <label for="referral" class="form-check-label">Referral</label>
                    </div>
                    <label>Source:</label>
                    <input type="text" v-model="referralBy" name="referralBy" class="form-control" placeholder="Referral By"><br>

                    <div class="form-check form-check-inline">
                        <input type="radio" v-model="selectedSource" name="source" value="Online Advertisement" class="form-check-input">
                        <label for="onlineAd" class="form-check-label">Online Advertisement</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" v-model="selectedSource" name="source" value="Walk-In" class="form-check-input">
                        <label for="walkIn" class="form-check-label">Walk-In</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" v-model="selectedSource" name="source" value="Others Referral" class="form-check-input">
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

                    <div class="form-group">
                        <label for="gender">Gender:</label>
                        <select v-model="gender" name="gender" class="form-control" required>
                            <option value="" disabled>Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div class="form-group">
                    <label for="bloodType">Blood Type:</label>
                    <select v-model="bloodType" name="bloodType" class="form-control" required>
                        <option value="" disabled>Select blood type</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

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
                        <select v-model="maritalStatus" name="maritalStatus" class="form-control">
                            <option value="" disabled>Select marital status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>


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
                    <label for="lifeInsuranceExperience">Life Insurance Experience:</label>
                  
                  <div>  
                  <input type="checkbox" id="yesLife" v-modellifeInsuranceExperience name="lifeInsuranceExperience" value="Yes">
                  <label for="yesLife">Yes</label>

                  <input type="checkbox" id="noLife" v-model="lifeInsuranceExperience" name="lifeInsuranceExperience" value="No">
                  <label for="noLife">No</label></div><br><br>

                  <label for="insuranceType">If yes, check the type:</label><br>
                  <input type="checkbox" id="traditional" v-model="traditional" name="traditional" value="Traditional">
                  <label for="traditional">Traditional</label>

                  <input type="checkbox" id="variable" v-model="variable" name="variable" value="Variable">
                  <label for="variable">Variable</label><br><br>

                  <label for="recentInsuranceCompany">Most recent Life Insurance Company:</label>
                  <input type="text" id="recentInsuranceCompany" v-model="recentInsuranceCompany" name="recentInsuranceCompany" class="form-control"><br>
                </div>

                <h2>Educational Background</h2>
                <div class="table-responsive">
                <table class="table table-bordered">
                  <tr>
                    <th></th>
                    <th class="text-center">SCHOOL</th>
                    <th class="text-center">COURSE</th>
                    <th class="text-center">YEAR GRADUATED</th>
                  </tr>
                  <tr>
                    <td>High School</td>
                    <td><input type="text" v-model="highSchool" name="highSchool" class="form-control text-center"></td>
                    <td><input type="text" v-model="highSchoolCourse" name="highSchoolCourse" class="form-control text-center"></td>
                    <td><input type="date" v-model="highSchoolYear" name="highSchoolYear" class="form-control text-center"></td>
                  </tr>
                  <tr>
                    <td>College</td>
                    <td><input type="text" v-model="college" name="college" class="form-control text-center"></td>
                    <td><input type="text" v-model="collegeCourse" name="collegeCourse" class="form-control text-center"></td>
                    <td><input type="date" v-model="collegeYear" name="collegeYear" class="form-control text-center"></td>
                  </tr>
                  <tr>
                    <td>Graduate School</td>
                    <td><input type="text" v-model="graduateSchool" name="graduateSchool" class="form-control text-center"></td>
                    <td><input type="text" v-model="graduateCourse" name="graduateCourse" class="form-control text-center"></td>
                    <td><input type="date" v-model="graduateYear" name="graduateYear" class="form-control text-center"></td>
                  </tr>
                </table>
                </div>

                <h2>Employment History</h2>
                <div class="table-responsive">
                <table class="table table-bordered">
                  <tr>
                    <th class="text-center">NAME AND ADDRESS OF EMPLOYER</th>
                    <th class="text-center">POSITION</th>
                    <th class="text-center" colspan="2">EMPLOYMENT DATE</th>
                    <th class="text-center">REASON FOR LEAVING</th>
                  </tr>
                  <tr>
                    <td><input type="text" v-model="companyName1" name="companyName1" class="form-control text-center"></td>
                    <td><input type="text" v-model="position1" name="position1" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentFrom1" name="employmentFrom1" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentTo1" name="employmentTo1" class="form-control text-center" ></td>
                    <td><input type="text" v-model="reason1" name="reason1" class="form-control text-center"></td>
                  </tr>
                  <tr>
                    <td><input type="text" v-model="companyName2" name="companyName2" class="form-control text-center"></td>
                    <td><input type="text" v-model="position2" name="position2" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentFrom2" name="employmentFrom2" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentTo2" name="employmentTo2" class="form-control text-center" ></td>
                    <td><input type="text" v-model="reason2" name="reason2" class="form-control text-center"></td>
                  </tr>
                  <tr>
                    <td><input type="text" v-model="companyName3" name="companyName3" class="form-control text-center"></td>
                    <td><input type="text" v-model="position3" name="position3" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentFrom3" name="employmentFrom3" class="form-control text-center"></td>
                    <td><input type="date" v-model="employmentTo3" name="employmentTo3" class="form-control text-center" ></td>
                    <td><input type="text" v-model="reason3" name="reason3" class="form-control text-center"></td>
                  </tr>
                </table>
                </div>


                <h2>Most recent employer's contact details</h2>
                <table class="table" border="1">
                  <tr>
                    <td>Company Name:<input type="text" v-model="companyName" name="companyName" class="form-control"></td>
                    <td>Position:<input type="text" v-model="resposition" name="resposition" class="form-control"></td>
                  </tr>
                  <tr>
                    <td colspan="2" style="text-align: center;">Employer's contact details:</td>
                  </tr>
                  <tr>
                    <td><input type="text" v-model="contactName" name="contactName" class="form-control" placeholder="Contact Name:"></td>
                    <td><input type="text" v-modelcontactPosition name="contactPosition" class="form-control" placeholder="Position:"></td>
                  </tr>
                  <tr>
                    <td><input type="text" v-model="emailAddress" name="emailAddress" class="form-control" placeholder="Email Address:"></td>
                    <td><input type="text" v-model="contactNumber" name="contactNumber" class="form-control" placeholder="Contact Number:"></td>
                  </tr>
                  <tr>
                    <td colspan="2">If currently employed, have you already tendered your resignation?
                      <div><div class="form-check form-check-inline">
                        <label class="form-check-label" for="yesCheckbox">Yes</label>
                        <input type="checkbox" v-model="yescuremployed" name="yescuremployed" class="form-check-input" value="Yes">
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="noCheckbox">No</label>
                        <input type="checkbox" v-model="nocuremployed" name="nocuremployed" class="form-check-input" value="No">
                      </div>
                    </div>
                    </td>

                  </tr>
                  <tr>
                    <td colspan="2">1. If answer is No, are we allowed to conduct the employment verification?
                      <div><div class="form-check form-check-inline">
                        <label class="form-check-label" for="yesCheckbox">Yes</label>
                        <input type="checkbox" v-model="allowed" name="allowed" class="form-check-input" value="Yes">
                      </div>
                      <div class="form-check form-check-inline">
                        <label class="form-check-label" for="noCheckbox">No</label>
                        <input type="checkbox" v-model="notallowed" name="notallowed" class="form-check-input" value="No">
                      </div>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2"><input type="text" v-model="ifnoProvdtls" name="ifnoProvdtls" class="form-control"
                        placeholder="2. If answer in number 1 is no, please provide details "></td>
                  </tr>
                </table>
                <input type="submit" value="Submit" class="btn btn-primary">
              </fieldset>
        </form>
    </div>
</div>
</section>
</main><!-- End #main -->
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
        tin: "",

        lifeInsuranceExperience: "",
        traditional: "",
        variable: "",
        recentInsuranceCompany: "",
        highSchool: "",
        highSchoolCourse: "",
        highSchoolYear: "",
        college: "",
        collegeCourse: "",
        collegeYear: "",
        graduateSchool: "",
        graduateCourse: "",
        graduateYear: "",
        companyName1: "",
        position1: "",
        employmentFrom1: "",
        employmentTo1: "",
        reason1: "",
        companyName2: "",
        position2: "",
        employmentFrom2: "",
        employmentTo2: "",
        reason2: "",
        companyName3: "",
        position3: "",
        employmentFrom3: "",
        employmentTo3: "",
        reason3: "",
        companyName: "",
        resposition: "",
        contactName: "",
        contactPosition: "",
        emailAddress: "",
        contactNumber: "",
        yescuremployed: "",
        nocuremployed: "",
        allowed: "",
        notallowed: "",
        ifnoProvdtls: "",
        
      };
    },

    created() {
      this.resetForm();
    },

    methods: {
      async save() {
        const requiredFields = [
          "preferredArea",
          "fname",
          "birthdate",
          "placeOfBirth",
          "gender",
          "bloodType",
          "homeAddress",
          "mobileNo",
          "email",
          "citizenship",
          "maritalStatus",
          "sssNo",
          "tin"
        ];

        for (const field of requiredFields) {
          if (!this[field]) {
            alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').trim()} field.`);
            return;
          }
        }

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

            lifeInsuranceExperience: this.lifeInsuranceExperience || "N/A",
traditional: this.traditional || "N/A",
variable: this.variable || "N/A",
recentInsuranceCompany: this.recentInsuranceCompany || "N/A",
highSchool: this.highSchool || "N/A",
highSchoolCourse: this.highSchoolCourse || "N/A",
highSchoolYear: this.highSchoolYear || "N/A",
college: this.college || "N/A",
collegeCourse: this.collegeCourse || "N/A",
collegeYear: this.collegeYear || "N/A",
graduateSchool: this.graduateSchool || "N/A",
graduateCourse: this.graduateCourse || "N/A",
graduateYear: this.graduateYear || "N/A",
companyName1: this.companyName1 || "N/A",
position1: this.position1 || "N/A",
employmentFrom1: this.employmentFrom1 || "N/A",
employmentTo1: this.employmentTo1 || "N/A",
reason1: this.reason1 || "N/A",
companyName2: this.companyName2 || "N/A",
position2: this.position2 || "N/A",
employmentFrom2: this.employmentFrom2 || "N/A",
employmentTo2: this.employmentTo2 || "N/A",
reason2: this.reason2 || "N/A",
companyName3: this.companyName3 || "N/A",
position3: this.position3 || "N/A",
employmentFrom3: this.employmentFrom3 || "N/A",
employmentTo3: this.employmentTo3 || "N/A",
reason3: this.reason3 || "N/A",
companyName: this.companyName || "N/A",
resposition: this.resposition || "N/A",
contactName: this.contactName || "N/A",
contactPosition: this.contactPosition || "N/A",
emailAddress: this.emailAddress || "N/A",
contactNumber: this.contactNumber || "N/A",
yescuremployed: this.yescuremployed || "N/A",
nocuremployed: this.nocuremployed || "N/A",
allowed: this.allowed || "N/A",
notallowed: this.notallowed || "N/A",
ifnoProvdtls: this.ifnoProvdtls || "N/A",
          });

          // Reset the form after successful submission
          this.resetForm();
        } catch (error) {
          console.log(error);
        }
      },

      resetForm() {
        for (const key in this.$data) {
          if (this.$data.hasOwnProperty(key)) {
            this.$data[key] = "";
          }
        }
      }
    }
  }
</script>