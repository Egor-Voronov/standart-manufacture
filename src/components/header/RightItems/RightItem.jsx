export default function RightItem ({img, alt, boldTxt, normalTxt, isCity}) {
  return (
      <div className="r_item_container">
          <div className="r_item_top">
              <img src={img} alt={alt} className="r_item_img" />
              <div className="r_item_texts">
                  <a className="r_item_bold">{boldTxt}</a>
                  <a href="#" className={isCity ? 'r_item_anchor_city r_item_anchor' : 'r_item_anchor_phone r_item_anchor'}>{normalTxt}</a>
              </div>
          </div>
      </div>
  )
}
