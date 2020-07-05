<template>
  <div class="g-main">
    <div class="g-main__banner">
      <div class="g-main__banner__content">
        <h1 class="g-main__banner__title">JavaScript之家</h1>
        <p class="g-main__banner__title">
          不要努力成为一个成功的人， 而要努力成为一个有价值的人，
          关注程序员的自身成长。
        </p>
      </div>
    </div>
    <div class="g-main__content">
      <div class="g-layout_mp g-main__container">
        <h1 class="g-main__container__title">推荐文章：</h1>
        <div class="g-main__container__subhead">展示推荐的高质量博客文章</div>
        <div class="g-main__container__content">
          <div class="g-main__content">
            <div class="g-main__content__left">
              <div class="g-main__ulogo">
                <img
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593939602904&di=4fc4203dc1df5c8a8ba669165ee9be55&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F00%2F86%2F97%2F2856ec91297ab5c.jpg"
                  alt
                />
              </div>
            </div>
            <div class="g-main__content__right">
              <h1 class="g-main__content__title">JavaScript 编程语言</h1>
              <p class="g-main__content__content">
                Testing gives confidence in written code. In the context of this article,
                ‘testing’ means ‘automated testing’. Without automated testing, it is significantly
                harder to ensure the quality of a web application of significant complexity.
                Fails caused by automated testing may …
              </p>
              <div class="g-main__content__content__meta">
                <span>
                  <i class="el-icon-date"></i> 2020-07-05
                </span>
                <span>
                  <i class="el-icon-medal"></i> 阅读积分：5分
                </span>
                <span>
                  <i class="el-icon-medal"></i> 分享积分：10分
                </span>
                <span class="g-main__content__content__more">阅读更多...</span>
              </div>
            </div>
          </div>
          <div class="g-main__content">
            <div class="g-main__content__left">
              <div class="g-main__ulogo">
                <img src="../../assets/js_logo.jpeg" alt />
              </div>
            </div>
            <div class="g-main__content__right">
              <h1 class="g-main__content__title">JavaScript 编程语言</h1>
              <p class="g-main__content__content">
                Testing gives confidence in written code. In the context of this article,
                ‘testing’ means ‘automated testing’. Without automated testing, it is significantly
                harder to ensure the quality of a web application of significant complexity.
                Fails caused by automated testing may …
              </p>
              <div class="g-main__content__content__meta">
                <span>
                  <i class="el-icon-date"></i> 2020-07-05
                </span>
                <span>
                  <i class="el-icon-medal"></i> 阅读积分：5分
                </span>
                <span>
                  <i class="el-icon-medal"></i> 分享积分：10分
                </span>
                <span class="g-main__content__content__more">阅读更多...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="g-layout_mp g-main__container">
        <h1 class="g-main__container__title">最佳实践：</h1>
        <div class="g-main__container__subhead">vue、react、node等框架的热门应用项目</div>
        <div class="g-main__container__content">内容区</div>
      </div>
      <div class="g-layout_mp g-main__container">
        <h1 class="g-main__container__title">JavaScript：</h1>
        <div class="g-main__container__subhead">基础知识及应用</div>
        <div class="g-main__container__content">内容区</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GMin'
}
</script>

<style lang="less" scoped>
.g-main {
  min-height: 760px;
  padding-bottom: 10px;
}
.g-main__banner {
  background: #69c0ff;
}
.g-main__banner__content {
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  padding: 50px;
  & h1.g-main__banner__title {
    font-size: 36px;
    margin-bottom: 10px;
  }
  & p.g-main__banner__text {
    font-size: 16px;
  }
}
.g-main__content {
  width: 1200px;
  margin: 0 auto;
}
.g-main__container {
  padding: 10px;
  margin-top: 50px;
  & .g-main__container__title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & .g-main__container__title::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 15px;
    border-radius: 5px;
    background: #69c0ff;
    margin-right: 5px;
    vertical-align: middle;
  }
  & .g-main__container__subhead {
    font-size: 15px;
    color: #5b637a;
    margin-bottom: 30px;
  }
}
.g-main__container__content {
  & .g-main__content {
    display: flex;
    height: 150px;
    & .g-main__content__left {
      padding-left: 20px;
      & .g-main__ulogo {
        width: 80px;
        height: 80px;
        border-radius: var(--bio-image-border-radius, 10px);
        transform: scale(0.84) translateX(15%) rotateZ(calc(-1 * (11 * 1deg)));
        transform-origin: 0 100%;
        transition: transform 0.2s ease-out;
        overflow: hidden;
        & img {
          width: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          display: block;
          transform: scale(1.2) rotateZ(calc(11 * 1deg));
          transition: transform 0.2s ease-out;
        }
      }
    }
    & .g-main__content__right {
      flex: 1;
      padding-left: 20px;
      & .g-main__content__title {
        font-size: 25px;
        margin-bottom: 10px;
      }
      & .g-main__content__content {
        color: #9696a1;
        margin-bottom: 10px;
        line-height: 1.8;
      }
      & .g-main__content__content__meta {
        color: #9696a1;
        overflow: hidden;
        & span {
          margin-right: 10px;
        }
        & .g-main__content__content__more {
          float: right;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>