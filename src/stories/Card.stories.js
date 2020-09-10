import React from 'react';

import Card from '../components/Card'
import Button from '../components/Button'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = () => (
    <Card>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacinia sem. Morbi non aliquet ante. Aliquam et ligula sit amet orci dignissim placerat. Morbi faucibus, elit condimentum dignissim condimentum, magna enim euismod mi, quis rutrum metus orci vitae massa. Ut sit amet erat nec sapien tempus euismod. In turpis nisl, consectetur vel justo ullamcorper, auctor sollicitudin orci. Suspendisse potenti.</p>

        <p>Aenean non enim luctus, euismod nunc vitae, sollicitudin risus. Donec nec tellus vel eros semper elementum ut vitae elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pretium egestas augue suscipit lobortis. Proin feugiat mi non mauris suscipit, ut porta ex bibendum. Suspendisse volutpat id eros a lobortis. Donec vulputate nunc non pharetra maximus. Sed vitae augue vitae elit gravida mollis vel eget urna. Pellentesque finibus purus tempus bibendum posuere.</p>

        <div>
            <Button title="Save" />
            <Button variant="secondary" title="Cancel" />
        </div>
    </Card>
)
