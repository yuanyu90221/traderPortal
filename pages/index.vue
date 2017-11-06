<template>
  <div>
    <div class="header clear" @click="$router.push('/')">
      <div class="content">
        <ul class="nav">
          <li class="m_nav_menu font_24">
            <a href="#"><i class="fa fa-bars"></i></a>
          </li>
          <li class="nav_logo">
            <a href="" class="logo"><img src="img/logo.png" alt="CoolBitX"></a>
          </li>
          <li class="nav_top">
            <!-- nav person data -->
            <ul class="nav_setting">
              <li class="nav_last">
                <p>Last price: <span>{{lastPrice}}</span></p>
              </li>
              <li class="nav_bala">
                <label>Balance:</label><span>{{balance}}</span> <span><strong>{{currencyTp}}</strong></span>
              </li>
              <li class="nav_acct" >
                <a href="#" title="" class="main_acct" v-bind="acctList">Acct:{{acctList[0].Acct}}</a>
                <ul class="sub_acct" v-for="(acct, index) in acctList" :key="index">
                  <a href="#" class="main_acct">Acct{{index}}:{{acct.Acct}}{{acct.bitCoinTp}}</a>
                </ul>
              </li>
            </ul>
            <!-- logged in -->
            <!-- language -->
            <li class="nav_lang">
              <a href="#" title="Language" class="main_lang">Language</a>
              <ul class="sub_lang">
                <li v-for="(lang, index) in langOptList" :key="index"><a href="#" :title="lang.text">{{lang.text}}</a></li>
              </ul>
            </li>
            <li class="nav_login">
              <a href="#" title="User name"><span></span></a>
            </li>          
          </li>
        </ul>
      </div>
      <nuxt-link class="btn btn-warning" to="/daily/report">
        DailyReport
      </nuxt-link>
      <nuxt-link class="btn btn-warning" to="/daily/transactionFee">
        DailyFee
      </nuxt-link>
    </div>
    <!-- nested child view -->
    <!-- <nuxt/> -->
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data: () => {
      return {
        lastPrice:123456.12, 
        balance:12345678.12, 
        currencyTp:'USD', 
        acctList:[ {
          Acct: 1000.2345622,
          bitCoinTp: 'BTC'
        },
        {
          Acct: 1000.2345622,
          bitCoinTp: 'BTC'
        }],
        langOptList: [
          {
            type: 'zh_TW',
            text:'繁體中文'
          },
          {
            type: 'en',
            text:'English'
          },
          {
            type: 'zh_CN',
            text:'簡體中文'
          }
        ]
      }
  }  
}
</script>
